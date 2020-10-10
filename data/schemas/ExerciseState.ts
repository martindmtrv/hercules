import { ExerciseMetaData, EXERCISES } from "../ExercisesMetaData";
export class ExerciseState{
    reps : number;
    sets : number;
    isPriority: boolean;
    id : number;
    constructor(reps?: number, sets?: number, isPriority?: boolean, id?: number){
        this.reps = reps || 10;
        this.sets = sets || 3;
        this.isPriority = !!isPriority;
        this.id = id || 0;
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

    copyFrom(json: any): this {
        // UNSAFE only from json reading
        return Object.assign(this, json);
    }
}