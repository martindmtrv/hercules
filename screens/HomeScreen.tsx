import * as React from 'react';
import { Linking, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootData } from '../data/RootDataContext';
import { useIsFocused } from '@react-navigation/native';
import { SpotifyApiUtil } from '../spotifyPlaylist/SpotifyApiUtil';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

WebBrowser.maybeCompleteAuthSession();

export default function HomeScreen({route, navigation}: {route: any, navigation: any}) {
  const [refresh, setRefresh] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [token, setToken] = React.useState("");

  const isFocused = useIsFocused();

  const redirectUri = makeRedirectUri({useProxy: true});

  const [request, response, promptAsync] = useAuthRequest({
    clientId: '53c7066e812d48c49a554b559769a8fd',
    scopes: [],
    usePKCE: false,
    redirectUri: redirectUri,
  }, discovery);

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      setCode(code);
      navigation.navigate("Home");
    }
  }, [response]);

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
            {root.routines.length > 0 &&<TouchableOpacity style={{backgroundColor: "blue", borderRadius: 6, padding: 30, margin: 24}} onPress={() => {
              navigation.navigate("Routines", {screen:"Details", params:{id: root.routines[root.currentDay >= root.routines.length ? 0: root.currentDay].id}, initial: false});
            }}>
                <Text style={styles.text}>Check out Today's Workout</Text>
            </TouchableOpacity>}
            <TouchableOpacity style={{backgroundColor: "green", borderRadius: 6, padding: 16, margin: 12}} onPress={() => {
              if (!code){
                promptAsync({useProxy: true});
              }  else {
                if (!token) {
                  fetch(discovery.tokenEndpoint, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=53c7066e812d48c49a554b559769a8fd&client_secret=8a3c49f2544d4493ac4ab74878223df6`,
                    }).then(res => res.json()).then((res) =>{
  
                    fetch(`https://api.spotify.com/v1/search?type=playlist&q=gym&limit=1&offset=${Math.floor(Math.random() * 2000)}`, {
                      method: "GET",
                      headers: {
                        "Authorization": `Bearer ${res.access_token}`,
                      }
                    }).then(res => res.json()).then(res => {
                      
                      Linking.openURL(res.playlists.items[0].external_urls.spotify);
                    
                    }).catch(err => console.log(err));
  
                    root.apiCode = res.access_token;
                    root.saveData();
                    setToken(res.access_token);
  
                  });                
                } else {
                  fetch(`https://api.spotify.com/v1/search?type=playlist&q=gym&limit=1&offset=${Math.floor(Math.random() * 2000)}`, {
                      method: "GET",
                      headers: {
                        "Authorization": `Bearer ${token}`,
                      }
                    }).then(res => res.json()).then(res => {
                      Linking.openURL(res.playlists.items[0].external_urls.spotify);
                    
                    }).catch(err => console.log(err));
  
                    root.apiCode = token;
                    root.saveData(); 
                  } 
                }
                
              
              
              // SpotifyApiUtil.fetchRandomPlaylist().then(url => Linking.openURL(url));
            }}>
              <Text style={styles.text}>Check out a random Spotify playlist!</Text>
            </TouchableOpacity>
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
  },
  text : {
    fontFamily: 'Futura',
  }
});
