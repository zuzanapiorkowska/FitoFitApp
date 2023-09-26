import React from "react";
import { useFormContext } from "react-hook-form";
import { inputClassName } from "../utils";
import { InputField } from "./InputField";

export const DateInput = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <InputField
      label='Date'
      errorMessage={errors.date && (errors.date.message as string)}
      htmlFor='date'>
      <input
        {...register("date", { required: "Date is required" })}
        type='date'
        id='date'
        className={inputClassName}
      />
    </InputField>
  );
};
