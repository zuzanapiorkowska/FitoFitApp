import { LabelHTMLAttributes } from "react";
import { WorkoutType } from "../WorkoutsList/WorkoutsList.interface";

export interface InputFieldProps extends Pick<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {
  label: string;
  errorMessage?: string;
}

export interface WorkoutTypeSelectProps {
  disciplines: WorkoutType[];
  chosenDiscipline: WorkoutType;
  setDiscipline(string): void;
  onButtonClick(): void;
}
