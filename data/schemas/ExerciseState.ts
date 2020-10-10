import { ExerciseMetaData, EXERCISES } from "../ExercisesMetaData";
export class ExerciseState{
    reps : number;
    sets : number;
    isPriority: boolean;
    id : number;
    constructor(reps : number, sets : number, isPriority : boolean, id : number){
        this.reps = reps;
        this.sets = sets;
        this.isPriority = isPriority;
        this.id = id;
    }
    getWeight(): number{
        return this.reps * this.sets;
    }
    getMetaData() : ExerciseMetaData{
        return EXERCISES[this.id];
    }
    getExercise() : String{
        return this.getMetaData().exercise;
    }
    getMuscle() : String{
        return this.getMetaData().muscle;
    }
}