import {RoutineState} from './RoutineState';

import AsyncStorage from "@react-native-community/async-storage";

export class AppState{
  routines: RoutineState[] = [];
  currentDay: string = "";

  initialized: boolean;

  constructor() {
    this.initialized = false;
    this.routines = [];
    this.currentDay = "";
  }

  loadData(): Promise<boolean> {
    return AsyncStorage.getItem('app-data').then(data =>{
      const obj: DBFormat = JSON.parse(data || "{}");
      this.routines = obj.routines || [];
      this.currentDay = obj.currentDay || "";
      return this.initialized = true;
    }).catch(() => {
      console.log('there was a problem');
      return false;
    });  
  }

  saveData(): void {
    AsyncStorage.setItem('app-data', JSON.stringify(this), (err) => err && console.log(err));
  }
}

export interface DBFormat {
  routines: RoutineState[];
  currentDay: string;

}