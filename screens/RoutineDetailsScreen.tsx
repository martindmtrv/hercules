import * as React from 'react';
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RootData } from '../data/RootDataContext';
import { Text, View } from '../components/Themed';
import { ExerciseState } from '../data/schemas/ExerciseState';
import { RoutineState } from '../data/schemas/RoutineState';
import { Picker } from '@react-native-community/picker';
import { EXERCISES } from '../data/ExercisesMetaData';


export default function RoutineDetailsScreen({ route, navigation  }: {route:any, navigation: any}) {
  const [refresh, setRefresh] = React.useState(false);
  const [adding, setAdding] = React.useState(false);

  return (
    <RootData.Consumer>
      {(root) => {
        // @ts-ignore
        const routine: RoutineState = root.routines.find((routine) => routine.id === route.params.id);
        return (
        <View style={styles.container}>
          <Text style={styles.title}> {routine.routineDay} Day</Text>
          {!adding ? <TouchableOpacity style={{backgroundColor: "blue", padding: 8, marginTop: 5, borderRadius: 6}} onPress={() => setAdding(true)}><Text>+ Add New Exercise</Text></TouchableOpacity>
          :
          <TouchableOpacity style={{backgroundColor: "red", padding: 8, marginTop: 5, borderRadius: 6}} onPress={() => setAdding(false)}><Text>Cancel</Text></TouchableOpacity>}

          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <SafeAreaView style={styles.container}>
              {adding && <FlatList
                  style={styles.scrollView}
                  data={EXERCISES}
                  renderItem={({item, index, separators}) => 
                  <TouchableOpacity
                    //@ts-ignore
                    key={item.key}
                    onPress={() => {
                      routine.addExercise(new ExerciseState(3, 10, false, index));
                      root.saveData();
                      setRefresh(!refresh);
                      setAdding(false);
                    }}>
                    <View style={styles.box}>
                      <Text>{item.exercise}</Text>
                      <Text>{item.muscle}</Text>
                    </View>
                  </TouchableOpacity>}
                  keyExtractor={item => item.exercise}
                />}
            {!adding && <ScrollView style={styles.scrollView}>
              {routine.exercises.map((item: ExerciseState) => 
              <TouchableOpacity key={item.id} style={styles.box} onPress={()=> console.log(item)}>
                <Text>{item.getExercise()}</Text>
                <Text>Sets: {item.sets}</Text>
                <Picker selectedValue={item.sets} style={{height: 50, width: 100}} onValueChange={(value: any) => {
                  item.sets = parseInt(value);
                  root.saveData();
                  setRefresh(!refresh);
                  }}>
                    <Picker.Item label={"1"} value={1} />
                    <Picker.Item label={"2"} value={2} />
                    <Picker.Item label={"3"} value={3} />
                    <Picker.Item label={"4"} value={4} />
                    <Picker.Item label={"5"} value={5} />
                  </Picker>
                <Text>Reps: {item.reps}</Text>
                <Picker selectedValue={item.reps} style={{height: 50, width: 100}} onValueChange={(value: any) => {
                  item.reps = parseInt(value);
                  root.saveData();
                  setRefresh(!refresh);
                  }}>
                    <Picker.Item label={"1"} value={1} />
                    <Picker.Item label={"2"} value={2} />
                    <Picker.Item label={"3"} value={3} />
                    <Picker.Item label={"4"} value={4} />
                    <Picker.Item label={"5"} value={5} />
                    <Picker.Item label={"6"} value={6} />
                    <Picker.Item label={"8"} value={8} />
                    <Picker.Item label={"10"} value={10} />
                    <Picker.Item label={"12"} value={12} />
                    <Picker.Item label={"15"} value={15} />
                  </Picker>
                </TouchableOpacity>)}
                </ScrollView> }
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
    flexGrow: 0,
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
    width: Dimensions.get('window').width*0.8,
    marginVertical: 20,
  },
  text: {
    fontSize: 42,
  },
});
