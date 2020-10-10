import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RootData } from '../App';
import { Text, View } from '../components/Themed';


export default function RoutineDetailsScreen({ route, navigation  }: {route:any, navigation: any}) {

  const days = ["Chest", "Back", "Legs", "Arms", "Shoulders"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {route.params.name} Day</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <RootData.Consumer>
      {(root) => (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {[0, 1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14].map(item => <TouchableOpacity style={styles.box} onPress={()=> console.log(item)}>
      <Text key={item}>{root.routines.find((routine) => routine.id === route.params.id)}</Text>
            <Text>Sets: </Text>
            <Text>Reps: </Text>
            </TouchableOpacity>)}
        </ScrollView>
        </SafeAreaView>
      )}
      </RootData.Consumer>
    </View>
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
