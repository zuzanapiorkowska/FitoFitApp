import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { WorkoutsContext } from "../../pages/_app";
import { pastWorkoutsMock } from "./utils";
import { WorkoutItem } from "./WorkoutItem";
export const WorkoutsList = () => {
  const { myWorkouts, setMyWorkouts } = useContext(WorkoutsContext);

  useEffect(() => {
    if (localStorage.getItem("workouts") !== null && localStorage.getItem("workouts") !== "[]") {
      const pastWorkouts = localStorage.getItem("workouts");
      setMyWorkouts(JSON.parse(pastWorkouts));
      console.log(JSON.parse(pastWorkouts)[0]);
    } else {
      localStorage.setItem("workouts", JSON.stringify(pastWorkoutsMock));
      setMyWorkouts(pastWorkoutsMock);
    }
  }, []);

  return (
    <div className='flex flex-col gap-2 max-h-full h-full overflow-y-auto scrollbar scrollbar-thumb-pinkDark scrollbar-thin pr-1'>
      {myWorkouts.length > 0 &&
        myWorkouts.map((workout, idx) => (
          <WorkoutItem
            workout={workout}
            onRemoveClick={() => {
              setMyWorkouts(prev =>
                prev.filter(prevWorkout => {
                  return prevWorkout.id !== workout.id;
                })
              );
            }}
            key={idx}
          />
        ))}
    </div>
  );
};
