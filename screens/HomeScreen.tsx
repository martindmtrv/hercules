import * as React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootData } from '../data/RootDataContext';
import { useIsFocused } from '@react-navigation/native';

export default function HomeScreen({route, navigation}: {route: any, navigation: any}) {
  const [refresh, setRefresh] = React.useState(false);

  const isFocused = useIsFocused()

  React.useEffect(() => {
    setRefresh(!refresh);
  }, [isFocused])

  return (
    <RootData.Consumer>
    {(root) => (<View style={styles.container}>
        <View style={styles.icon_container}>
            <FontAwesome5 name="dumbbell" size={80} color="#900" />
        </View>
        <View style={styles.centerbox}>
            <Text style={styles.title}>{root.routines.length !== 0 || root.routines[root.currentDay] ? `TODAY'S WORKOUT: ${root.routines[root.currentDay >= root.routines.length ? 0: root.currentDay]?.routineDay.toUpperCase()}`: "NO DAYS"}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {root.routines.length > 0 &&<TouchableOpacity style={{backgroundColor: "blue", borderRadius: 6, padding: 16, margin: 12}} onPress={() => {
              navigation.navigate("Routines", {screen:"Details", params:{id: root.routines[root.currentDay >= root.routines.length ? 0: root.currentDay].id}, initial: false});
            }}>
                <Text>Check out Today's Workout</Text>
            </TouchableOpacity>}
            <Text>Check out the Spotify playlist of the day!</Text>
        </View>
    </View>)}
    </RootData.Consumer>
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
