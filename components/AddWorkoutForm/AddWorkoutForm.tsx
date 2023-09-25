import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { SendRequest } from "../../services/SendRequest";
import { NextArrowIcon } from "../icons/NextArrowIcon";
import { IWorkout, WorkoutType } from "../WorkoutsList/WorkoutsList.interface";
import { AddWorkoutButton } from "./AddWorkoutButton";
import { InputField } from "./InputField";
import { inputClassName } from "./utils";
import { WorkoutTypeSelect } from "./WorkoutTypeSelect";

export default function AddWorkoutForm() {
  const form = useForm<IWorkout>({
    defaultValues: { id: "0", date: new Date(), parts: [], notes: "" },
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitted },
    clearErrors,
  } = form;

  async function onSubmit(workout: IWorkout) {
    location.replace("/");
  }

  const [discipline, setDiscipline] = useState<WorkoutType>(WorkoutType.CYCLING);

  const [partialWorkouts, setPartialWorkouts] = useState([
    { discipline: "cycling", displayed: false },
    { discipline: "running", displayed: false },
    { discipline: "swimming", displayed: false },
  ]);

  return (
    <div className='w-full bg-white bg-opacity-20 p-4 rounded-md'>
      <h1 className='w-full flex font-bold justify-center'>WORKOUT DETAILS</h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1' noValidate>
          <InputField label='Date' errorMessage={errors.date && errors.date.message} htmlFor='date'>
            <input
              {...register("date", { required: "Date is required" })}
              type='date'
              id='date'
              className={inputClassName}
            />
          </InputField>
          <div className='add-part'>
            <WorkoutTypeSelect discipline={discipline} setDiscipline={setDiscipline} />
            {/* <button
                className='add-part__button'
                onClick={() => {
                  addNewPart();
                  setTimeout(() => {
                    clearErrors();
                  }, 0);
                }}>
                +
              </button> */}
          </div>
          <div className='parts'>
            {partialWorkouts.map((part, idx) => {
              if (part.displayed) return <div>workout</div>;
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
