import cuid from "cuid";
import { ExerciseMetaData, EXERCISES } from "../ExercisesMetaData";
export class ExerciseState{
    reps : number;
    sets : number;
    isPriority: boolean;
    eid : number;
    id: string
    constructor(reps?: number, sets?: number, isPriority?: boolean, id?: number){
        this.reps = reps || 10;
        this.sets = sets || 3;
        this.isPriority = !!isPriority;
        this.id = cuid();
        this.eid = id || 0;
    }
    getWeight(): number{
        return this.reps * this.sets;
    }
    getMetaData() : ExerciseMetaData{
        return EXERCISES[this.eid];
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