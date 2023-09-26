import { ReactNode } from "react";
import { IWorkout } from "../../types/types";

export enum WorkoutType {
  CYCLING = "cycling",
  SWIMMING = "swimming",
  RUNNING = "running",
}

export interface AccordionProps {
  title: ReactNode;
}

export interface WorkoutItemProps {
  workout: IWorkout;
  onRemoveClick(): void;
}
