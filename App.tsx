import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {ThemeProvider} from "react-native-elements";
import { AppState } from './data/schemas/AppState';
import { RoutineState } from './data/schemas/RoutineState';
import { ExerciseState } from './data/schemas/ExerciseState';

import {RootData} from "./data/RootDataContext";
import { ActivityIndicator } from 'react-native';

//test
//import {ExerciseState} from './data/schemas/ExerciseState'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [root, setRoot] = useState(new AppState());
  const [init, setInit] = useState(false);

  useEffect(() => {
    root.loadData().then(res => {
      console.log(res);
      console.log(root);
      res && setInit(true);
    });
  }, []);

  if (init && (!root.routines || root.routines.length === 0)) {
    // initialize test values
    console.log("INSERTING TESTS");
    root.routines.push(new RoutineState("Chest"));
    root.routines[0].addExercise(new ExerciseState(3, 10, false, 0));
    root.routines[0].addExercise(new ExerciseState(4, 12, false, 1));
    root.routines[0].addExercise(new ExerciseState(3, 10, false, 0));

    root.routines.push(new RoutineState("Back"));
    root.routines[1].addExercise(new ExerciseState(3, 10, false, 0));
    root.routines[1].addExercise(new ExerciseState(2, 5, false, 9));
    root.routines[1].addExercise(new ExerciseState(3, 10, false, 0));


    root.routines.push(new RoutineState("Legs"));
    root.routines[2].addExercise(new ExerciseState(5, 10, false, 55));

    root.currentDay || (root.currentDay = 0);

    root.saveData();
  }

  //test
 // const test = new ExerciseState(10,3,true,0)
 // console.log(test);

  if (!isLoadingComplete && !init) {
    return <ActivityIndicator />;
  } else {
    return (
      <RootData.Provider value={root}>
        <SafeAreaProvider>
          <ThemeProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ThemeProvider>
        </SafeAreaProvider>
      </RootData.Provider>
    );
  }
}
