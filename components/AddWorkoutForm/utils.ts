export const inputClassName =
  "w-full rounded-md bg-white bg-opacity-50 p-2 text-xs text-pinkDark focus:outline focus:outline-2 focus:outline-main focus:ring-0 placeholder:text-pinkDark placeholder:text-opacity-40 focus:ring-4 focus:ring-salmonLight";

export const handleMinusKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "-") e.preventDefault();
  return;
};
