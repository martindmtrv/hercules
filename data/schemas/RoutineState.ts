import cuid from 'cuid';
import {ExerciseState} from './ExerciseState'

export class RoutineState{
    numExercises : number;
    routineDay : string;
    readonly id: string;
    exercises : ExerciseState[];

    constructor(routineDay : string){
        this.numExercises = 0;
        this.routineDay = routineDay;
        this.id = cuid();
        this.exercises = [];
    }
    
    /**
     * Adds an exercise to an array pertaining to the routine.
     * 
     * @param exState an exercise of type ExerciseState
     */
    addExercise(exState : ExerciseState) : void {
        //adds total num of exercises
        this.numExercises++;
        this.exercises.push(exState);
    }
    /**
    * Removes an exercise from the array pertaining to the routine.
    * @param exState 
    */
    removeExercise(exState : ExerciseState) : void {
        var i;
        for(i=0; i<this.exercises.length;i++){
            if(this.exercises[i].id == exState.id){
                //subtracts total number of exercises in Routine
                this.numExercises--;
                this.exercises.slice(i)
            }else{
                console.error("This exercise is not in your Routine.");  
            }
        }
    }

}