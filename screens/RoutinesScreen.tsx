import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootData } from '../data/RootDataContext';

export default function RoutinesScreen({ navigation }: {navigation: any}) {
  return (
    <RootData.Consumer>
      {(root) => (
        <View style={styles.container}>
        <Text style={styles.title}>Your Routines</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            {root.routines.map(routine => <TouchableOpacity key={routine.id} style={styles.box} onPress={()=> navigation.navigate(`Details`, {id: routine.id})}>
              <Text style={styles.routineName}>{routine.routineDay}</Text>
              </TouchableOpacity>)}
          </ScrollView>
        </SafeAreaView>
      </View>
      )}
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
    width: Dimensions.get('window').width * 0.8,
    marginVertical: 20,
  },
  text: {
    fontSize: 42,
  },
});
