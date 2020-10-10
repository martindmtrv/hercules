import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import {StackNavigationProp} from "@react-navigation/stack";


export default function RoutinesScreen({ navigation }: {navigation: any}) {

  const days = ["Chest", "Back", "Legs", "Arms", "Shoulders"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Routines</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {days.map(item => <TouchableOpacity key={item} style={styles.box} onPress={()=> navigation.navigate(`Details`, {name: item})}>
            <Text style={styles.routineName}>{item}</Text>
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
