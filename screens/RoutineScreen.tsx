import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import {EXERCISES} from '../data/ExercisesMetaData';

export default function RoutineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Routines</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {[0, 1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14].map(item => <TouchableOpacity style={styles.box} onPress={()=> console.log(item)}>
            <Text key={item}>{EXERCISES[item].exercise}</Text>
            </TouchableOpacity>)}
        </ScrollView>
    </SafeAreaView>
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
    minWidth: "80%",
    display: 'flex',
    justifyContent: "flex-end",
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 200,
    borderColor: "red",
  },
  routineName: {
    alignItems: "center",
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
    minWidth: 800,
    marginVertical: 20,
  },
  text: {
    fontSize: 42,
  },
});
