import { HTMLAttributes, LabelHTMLAttributes } from "react";

export interface InputFieldProps extends Pick<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {
  label: string;
  errorMessage?: string;
}
