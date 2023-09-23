import classNames from "classnames";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { NextArrowIcon as AngleRightIcon } from "../Carousel/icons/NextArrowIcon";
import { AccordionProps } from "./WorkoutCard.interface";

export const Accordion = ({ title, children }: PropsWithChildren<AccordionProps>) => {
  const [isExpanded, setIsExpanded] = useState<boolean>();

  const [contentHeight, setContentHeight] = useState<number>();
  const childrenRef = useRef<HTMLParagraphElement>(null);

  const setAccordionHeight = () => {
    if (childrenRef) setContentHeight(childrenRef?.current?.clientHeight);
  };

  useEffect(() => {
    setAccordionHeight();
  }, [childrenRef]);

  return (
    <div className='w-72'>
      <button
        className={classNames(
          "flex items-center justify-between gap-2 w-full py-2 px-4",
          "bg-pinkDark bg-opacity-50 rounded-t-md",
          "duration-300 ease-in transition-all",
          !isExpanded && "rounded-b-md"
        )}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}>
        <span className='font-bold'>{title}</span>
        <span
          className={classNames(
            "w-4 h-4",
            "duration-400 ease-in transition-all",
            isExpanded ? "-rotate-90" : "rotate-90"
          )}>
          <AngleRightIcon />
        </span>
      </button>
      <div
        style={{ height: isExpanded ? `${contentHeight}px` : 0 }}
        className={classNames("overflow-hidden", "ease-in-out duration-500 transition-all")}>
        <div
          className={classNames(
            "py-2 px-4 bg-white bg-opacity-20 rounded-b-md",
            !isExpanded && "rounded-t-md"
          )}
          ref={childrenRef}
          aria-hidden={!isExpanded}>
          {children}
        </div>
      </div>
    </div>
  );
};
