import {ExerciseState} from './ExerciseState'

export class RoutineState{
    numExercises : number;
    routineDay : String 
    exercise : ExerciseState[]
    constructor(routineDay : String){
        this.numExercises = 0;
        this.routineDay = routineDay;
        this.exercise = [];
    }
    
    /**
     * Adds an exercise to an array pertaining to the routine.
     * 
     * @param exState an exercise of type ExerciseState
     */
    addExercise(exState : ExerciseState) : void {
        //adds total num of exercises
        this.numExercises++;
        this.exercise.push(exState);
    }
    /**
    * Removes an exercise from the array pertaining to the routine.
    * @param exState 
    */
    removeExercise(exState : ExerciseState) : void {
        var i;
        for(i=0; i<this.exercise.length;i++){
            if(this.exercise[i].id == exState.id){
                //subtracts total number of exercises in Routine
                this.numExercises--;
                this.exercise.slice(i)
            }else{
                console.error("This exercise is not in your Routine.");  
            }
        }
    }

}