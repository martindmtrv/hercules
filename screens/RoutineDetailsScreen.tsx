import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RootData } from '../App';
import { Text, View } from '../components/Themed';
import { ExerciseState } from '../data/schemas/ExerciseState';
import { RoutineState } from '../data/schemas/RoutineState';


export default function RoutineDetailsScreen({ route, navigation  }: {route:any, navigation: any}) {

  const days = ["Chest", "Back", "Legs", "Arms", "Shoulders"];

  return (
    <RootData.Consumer>
      {(root) => {
        // @ts-ignore
        const routine: RoutineState = root.routines.find((routine) => routine.id === route.params.id);
        return (
        <View style={styles.container}>
          <Text style={styles.title}> {routine.routineDay} Day</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {routine.exercises.map((item: ExerciseState) => <TouchableOpacity key={item.id} style={styles.box} onPress={()=> console.log(item)}>
                <Text>{item.getExercise()}</Text>
                <Text>Sets: {item.sets}</Text>
                <Text>Reps: {item.reps}</Text>
                </TouchableOpacity>)}
            </ScrollView>
            </SafeAreaView>
        </View>
        );
      }}
    </RootData.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    height: 200,
    justifyContent: "center",
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 25,
    borderColor: "red",
  },
  routineName: {
    fontSize: 30,
    width: 'fit-content',
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    width: "80vw",
    marginVertical: 20,
  },
  text: {
    fontSize: 42,
  },
});
