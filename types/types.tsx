import { Dispatch, SetStateAction } from "react";

export interface IPartialWorkout {
  discipline: string;
  distanceInMeters: number;
  durationInSeconds: number;
}

export interface IWorkout {
  id: string;
  date: Date;
  parts: IPartialWorkout[];
  notes?: string;
}

export interface IWorkoutContext {
  myWorkouts: IWorkout[];
  setMyWorkouts: Dispatch<SetStateAction<IWorkout[]>>;
}
