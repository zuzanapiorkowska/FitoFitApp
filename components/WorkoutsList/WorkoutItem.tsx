import Link from "next/link";
import React, { useState } from "react";
import { EditIcon } from "../icons/EditIcon";
import { TrashIcon } from "../icons/TrashIcon";
import { Accordion } from "./Accordion";
import { TimeParts } from "./utils";
import { IWorkout, WorkoutItemProps } from "./WorkoutsList.interface";

export const WorkoutItem = ({ workout, onRemoveClick }: WorkoutItemProps) => {
  return (
    <Accordion
      title={
        <div className='flex items-center justify-between w-full text-sm'>
          <span>{workout.date.toString()}</span>
          <span className='flex gap-2'>
            <Link href={`/edit/${workout.id}`}>
              <div className='h-4 w-4'>
                <EditIcon />
              </div>
            </Link>
            <button className='h-4 w-4' onClick={() => onRemoveClick()}>
              <TrashIcon />
            </button>
          </span>
        </div>
      }>
      <div className='text-xs flex flex-col gap-1 font-bold'>
        {workout.parts.map(({ discipline, distanceInMeters, durationInSeconds }, idx) => {
          const duration = new TimeParts(durationInSeconds);
          return (
            <div key={idx} className='bg-white bg-opacity-20 rounded-md p-2'>
              <p className='text-violetExtraDark text-sm flex justify-center'>
                <span className='bg-white bg-opacity-40 rounded-sm px-1'>
                  {discipline.toUpperCase()}
                </span>
              </p>
              <p className='font-bold'>
                <span className='text-2xs text-violetExtraDark'>Distance: </span>
                <span className='text-violetDark'>{distanceInMeters / 1000} km</span>
              </p>
              <p className='font-bold'>
                <span className='text-[0.6rem] text-violetExtraDark'> Duration: </span>
                <span className='text-violetDark'>
                  <span className='details__value'>{duration.hours}</span> :{" "}
                  <span className='details__value'>{duration.minutes}</span> :{" "}
                  <span className='details__value'>{duration.seconds}</span> km
                </span>
              </p>
            </div>
          );
        })}
        <div className='bg-violetDark bg-opacity-20 rounded-md p-2 text-2xs'>
          <span className='text-violetExtraDark'>Notes:</span>
          <span className='font-normal'> {workout.notes}</span>
        </div>
      </div>
    </Accordion>
  );
};
