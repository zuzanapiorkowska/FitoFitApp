import { useEffect, useState } from "react";
import { useFormContext, UseFormRegister } from "react-hook-form";
import { TimeParts } from "../../WorkoutsList/utils";
import { InputField } from "./InputField";
import { inputClassName } from "../utils";

interface DurationInputProps {
  idx: number;
  durationToEdit?: number;
}

export function DurationInput({ idx, durationToEdit }: DurationInputProps) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const time = new TimeParts(durationToEdit || 0);

  const [duration, setDuration] = useState({
    hours: +time.hours,
    minutes: +time.minutes,
    seconds: +time.seconds,
  });

  useEffect(() => {
    const timeInSeconds = duration.hours * 3600 + duration.minutes * 60 + duration.seconds;
    console.log(timeInSeconds);
    if (timeInSeconds > 0) {
      setValue(`parts.${idx}.durationInSeconds`, timeInSeconds, { shouldValidate: true });
    }
  }, [duration]);

  return (
    <InputField
      label='Duration'
      errorMessage={
        errors.parts &&
        errors.parts[idx] &&
        errors.parts[idx].durationInSeconds &&
        errors.parts[idx].durationInSeconds.message
      }>
      <div className='flex items-center gap-1'>
        <input
          aria-label='hours'
          type='number'
          placeholder='hr'
          className={inputClassName}
          onChange={e => {
            const value = +e.target.value;
            setDuration(prev => ({ ...prev, hours: value }));
          }}
          defaultValue={durationToEdit && duration.hours}
        />
        <span>:</span>
        <input
          aria-label='minutes'
          type='number'
          placeholder='min'
          className={inputClassName}
          onChange={e => {
            const value = +e.target.value;
            setDuration(prev => ({ ...prev, minutes: value }));
          }}
          defaultValue={durationToEdit && duration.minutes}
        />
        <span>:</span>
        <input
          aria-label='seconds'
          type='number'
          placeholder='sec'
          className={inputClassName}
          onChange={e => {
            const value = +e.target.value;
            setDuration(prev => ({ ...prev, seconds: value }));
          }}
          defaultValue={durationToEdit && duration.seconds}
        />
        <input
          hidden
          {...register(`parts.${idx}.durationInSeconds`, {
            required: "Duration is required",
          })}
        />
      </div>
    </InputField>
  );
}
