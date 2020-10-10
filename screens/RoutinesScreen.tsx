import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootData } from '../data/RootDataContext';
import { RoutineState } from '../data/schemas/RoutineState';

export default function RoutinesScreen({ navigation }: {navigation: any}) {
  const [adding, setAdding] = React.useState(false);
  const [value, setValue] = React.useState("New Routine");

  return (
    <RootData.Consumer>
      {(root) => (
        <View style={styles.container}>
        <Text style={styles.title}>Your Routines</Text>
        {adding ? <TextInput style={styles.inputHandle} onChangeText={(text: string) => setValue(text)} value={value} onSubmitEditing={() => { 
          value && root.routines.push(new RoutineState(value)); 
          setAdding(false); 
          setValue("New Routine");
        }}  /> :
        <TouchableOpacity style={{backgroundColor: "blue", padding: 8, marginTop: 5, borderRadius: 6}} onPress={() => setAdding(true)}><Text>+ Add New Routine</Text></TouchableOpacity>}
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
  inputHandle: {
    height: 50,
    marginTop: 20,
    paddingLeft: 5,
    backgroundColor: "white",
    width: Dimensions.get('window').width * 0.8
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
