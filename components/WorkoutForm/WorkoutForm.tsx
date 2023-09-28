import classNames from "classnames";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { IWorkout } from "../../types/types";
import { inputClassName, scrollbarClassName } from "../../utils/classNames";
import { WorkoutType } from "../WorkoutsList/WorkoutsList.interface";
import { DateInput } from "./inputs/DateInput";
import { DistanceInput } from "./inputs/DistanceInput";
import { DurationInput } from "./inputs/DurationInput";
import { InputField } from "./inputs/InputField";
import { WorkoutFormButton } from "./WorkoutFormButton";
import { WorkoutTypeSelect } from "./WorkoutTypeSelect";

export default function WorkoutForm({ onFormSubmit }: { onFormSubmit(workout: IWorkout): void }) {
  const methods = useForm<IWorkout>({
    defaultValues: { id: "0", date: new Date(), parts: [], notes: "" },
  });
  const { register, handleSubmit } = methods;
  async function onSubmit(workout: IWorkout) {
    onFormSubmit(workout);
    location.replace("/myworkouts");
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <div
      className={classNames(
        "w-full p-4 rounded-md h-full bg-white bg-opacity-20",
        scrollbarClassName
      )}>
      <h1 className='w-full flex font-bold justify-center'>WORKOUT DETAILS</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-2 w-full'
          noValidate
          onKeyDown={handleKeyDown}>
          <input hidden {...register("id")} value={Math.random()} />
          <DateInput />
          <WorkoutTypeSelect
            disciplines={disciplines}
            chosenDiscipline={discipline}
            setDiscipline={setDiscipline}
            onButtonClick={onAddPartButtonClick}
          />

          <div className='flex flex-col gap-2'>
            {/* TODO: enable to remove workout part from form */}
            {partialWorkouts.map((part, idx) => {
              return (
                <div
                  key={idx}
                  data-testid={`${part}-form`}
                  className='w-full p-2 rounded-md flex flex-col gap-2 bg-pinkDark bg-opacity-30'>
                  <p className='text-center text-sm font-bold'>{part.toUpperCase()}</p>
                  <input hidden {...register(`parts.${idx}.discipline`)} value={discipline} />
                  <DistanceInput part={part} idx={idx} />
                  <DurationInput idx={idx} />
                </div>
              );
            })}
          </div>
          <InputField label='Notes' htmlFor='notes'>
            <textarea {...register("notes")} id='notes' className={inputClassName} />
          </InputField>
          <WorkoutFormButton />
        </form>
      </FormProvider>
    </div>
  );
}
