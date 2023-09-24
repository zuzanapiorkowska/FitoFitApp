import { ReactNode, RefObject, useEffect, useState } from "react";

export const useAccordionHeight = (children: ReactNode, childrenRef: RefObject<HTMLElement>) => {
  const [contentHeight, setContentHeight] = useState<number>();
  const setAccordionHeight = () => {
    if (childrenRef) setContentHeight(childrenRef?.current?.clientHeight);
  };

  useEffect(() => {
    setAccordionHeight();
  }, [children]);

  return { contentHeight };
};
