import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { TimeParts } from "../../WorkoutsList/utils";
import { InputField } from "./InputField";
import { handleMinusKeyDown } from "../utils";
import { inputClassName } from "../../../utils/classNames";

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
    console.log(duration);
    if (timeInSeconds > 0) {
      setValue(`parts.${idx}.durationInSeconds`, timeInSeconds, { shouldValidate: true });
    }
  }, [duration]);

  return (
    <InputField
      label='Duration'
      htmlFor='duration'
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
          min={0}
          onKeyDown={handleMinusKeyDown}
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
          min={0}
          onKeyDown={handleMinusKeyDown}
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
          min={0}
          onKeyDown={handleMinusKeyDown}
        />
        <input
          hidden
          {...register(`parts.${idx}.durationInSeconds`, {
            required: "Duration is required",
            min: {
              value: 1,
              message: "Min duration required is 1s",
            },
          })}
          id='duration'
          type='number'
        />
      </div>
    </InputField>
  );
}
