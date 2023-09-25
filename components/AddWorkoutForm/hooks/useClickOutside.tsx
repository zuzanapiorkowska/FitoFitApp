import { RefObject, useEffect, useState } from "react";

export const useClickOutside = (elementRef: RefObject<HTMLElement>) => {
  const [isElementVisible, setIsElementVisible] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: { target: EventTarget | null }) {
      if (
        elementRef.current &&
        event.target instanceof HTMLElement &&
        !elementRef.current.contains(event.target)
      ) {
        setIsElementVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isElementVisible, setIsElementVisible };
};
