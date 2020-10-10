import * as React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <React.Fragment>
        <FontAwesome5 name="dumbbell" size={100} color="#900" />
        <br/>
      </React.Fragment>
      <Text style={styles.title}>Welcome back</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Today is {} day.</Text>
      <TouchableOpacity onPress={() => console.log("Replace with navigation to workout page")}>
        <br/>
        <Text>Check out Today's Workout</Text>
        <br/>
      </TouchableOpacity>
      <Text>Check out the Spotify playlist of the day!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
