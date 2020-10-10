import * as React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.icon_container}>
            <FontAwesome5 name="dumbbell" size={80} color="#900" />
            <br/>
        </View>
        <View style={styles.centerbox}>
            <Text style={styles.title}>Today is {} day</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TouchableOpacity onPress={() => console.log("Replace with navigation to workout page")}>
                <br/>
                <Text>Check out Today's Workout</Text>
                <br/>
            </TouchableOpacity>
            <Text>Check out the Spotify playlist of the day!</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_container: {
    paddingBottom: 50,
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
  centerbox: {
    alignItems: 'center',
    paddingBottom: 250,
  }
});
