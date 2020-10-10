import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export default function RoutineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Routines</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {[1,2,3,4,5,6,7,8,9,10].map(item => <RoutineBox key={item}/>)}
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}

export function RoutineBox() {
  const routine = {
    name: "Chest",

  };
  return (
    <TouchableOpacity onPress={() => console.log("test")}>
      <Text style={styles.box}>{routine.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    width: "80%",
    borderStyle: "solid",
    borderColor: "yellow",
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
    minWidth: '80%',
    marginVertical: 20,
  },
  text: {
    fontSize: 42,
  },
});
