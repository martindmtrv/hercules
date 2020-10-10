import {RoutineState} from './RoutineState';

import AsyncStorage from "@react-native-community/async-storage";
import { ExerciseState } from './ExerciseState';

export class AppState{
  routines: RoutineState[] = [];
  currentDay: number = 0;

  initialized: boolean;

  constructor() {
    this.initialized = false;
    this.routines = [];
    this.currentDay = 0;
  }

  loadData(): Promise<boolean> {
    return AsyncStorage.getItem('app-data').then(data =>{
      // parse the data back
      const obj: DBFormat = JSON.parse(data || "{}");
      this.routines = obj.routines?.map(routine => {
        routine.exercises = routine.exercises.map(exercise => new ExerciseState().copyFrom(exercise));
        return new RoutineState().copyFrom(routine);
      }) || [];
      this.currentDay = obj.currentDay || 0;
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
  currentDay: number;

}