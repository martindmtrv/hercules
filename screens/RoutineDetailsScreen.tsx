import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';


export default function RoutineDetailsScreen({ route, navigation  }: {route:any, navigation: any}) {

  const days = ["Chest", "Back", "Legs", "Arms", "Shoulders"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEST {route.params.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
