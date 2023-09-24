import { ReactNode } from "react";

export enum Training {
  CYCLING = "cyclign",
  SWIMMING = "swimming",
  RUNNING = "running",
}

export interface AccordionProps {
  title: ReactNode;
}

export interface IPartialWorkout {
  discipline: string;
  distanceInMeters: number;
  durationInSeconds: number;
  id?: number;
}

export interface IWorkout {
  id: string;
  date: string;
  parts: IPartialWorkout[];
  notes?: string;
}
export interface WorkoutItemProps {
  workout: IWorkout;
  onRemoveClick(): void;
}