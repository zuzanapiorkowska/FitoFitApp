import { useContext, useEffect } from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { WorkoutsContext } from "../../pages/_app";
import { IWorkout } from "../../types/types";
import { WorkoutType } from "../WorkoutsList/WorkoutsList.interface";
import { AddWorkoutButton } from "./AddWorkoutButton";
import { DateInput } from "./inputs/DateInput";
import { DistanceInput } from "./inputs/DistanceInput";
import { DurationInput } from "./inputs/DurationInput";
import { InputField } from "./inputs/InputField";
import { inputClassName } from "./utils";
import { WorkoutTypeSelect } from "./WorkoutTypeSelect";

export default function AddWorkoutForm() {
  const { myWorkouts, setMyWorkouts } = useContext(WorkoutsContext);

  const methods = useForm<IWorkout>({
    defaultValues: { id: "0", date: new Date(), parts: [], notes: "" },
  });
  const { register, handleSubmit } = methods;
  async function onSubmit(workout: IWorkout) {
    setMyWorkouts([...myWorkouts, workout]);
    console.log(workout);
    setTimeout(() => localStorage.setItem("workouts", JSON.stringify(myWorkouts)));
    console.log(myWorkouts);
    // location.replace("/myworkouts");
  }

  const allDisciplines = Object.values(WorkoutType).map(value => value);
  const [disciplines, setDisciplines] = useState<WorkoutType[]>(allDisciplines);
  const [discipline, setDiscipline] = useState<WorkoutType>(WorkoutType.CYCLING);
  const [partialWorkouts, setPartialWorkouts] = useState<WorkoutType[]>([]);

  function onAddPartButtonClick() {
    if (!partialWorkouts.includes(discipline)) {
      setPartialWorkouts(prev => [...prev, discipline]);
      setDisciplines(prev => prev.filter(prevDiscipline => discipline !== prevDiscipline));
    }
  }

  return (
    <div className='w-full bg-white bg-opacity-20 p-4 rounded-md h-full overflow-y-auto scrollbar scrollbar-thumb-pinkDark scrollbar-thin'>
      <h1 className='w-full flex font-bold justify-center'>WORKOUT DETAILS</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full' noValidate>
          <input hidden {...register("id")} value={Math.random()} />
          <DateInput />
          <WorkoutTypeSelect
            disciplines={disciplines}
            chosenDiscipline={discipline}
            setDiscipline={setDiscipline}
            onButtonClick={onAddPartButtonClick}
          />

          <div className='flex flex-col gap-2'>
            {partialWorkouts.map((part, idx) => {
              return (
                <div
                  key={idx}
                  className='bg-pinkDark bg-opacity-30 w-full p-2 rounded-md flex flex-col gap-2'>
                  <p className='text-center text-sm font-bold'>{part.toUpperCase()}</p>
                  <input hidden {...register(`parts.${idx}.discipline`)} value={discipline} />
                  <DistanceInput part={part} idx={idx} />
                  <DurationInput idx={idx} />
                </div>
              );
            })}
          </div>
          <InputField label='Notes'>
            <textarea {...register("notes")} id='notes' className={inputClassName} />
          </InputField>
          <AddWorkoutButton />
        </form>
      </FormProvider>
    </div>
  );
}
