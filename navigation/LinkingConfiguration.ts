import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Routines: {
            screens: {
              RoutineScreen: 'routines',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'four',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
