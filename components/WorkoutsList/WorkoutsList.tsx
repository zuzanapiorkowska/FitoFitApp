import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { pastWorkoutsMock } from "./utils";
import { WorkoutItem } from "./WorkoutItem";
import { IWorkout } from "./WorkoutsList.interface";

export const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    setTimeout(() => localStorage.setItem("workouts", JSON.stringify(workouts)));
  }, [workouts]);

  useEffect(() => {
    if (localStorage.getItem("workouts") !== null && localStorage.getItem("workouts") !== "[]") {
      const pastworkouts = localStorage.getItem("workouts");
      setWorkouts(JSON.parse(pastworkouts));
    } else {
      localStorage.setItem("workouts", JSON.stringify(pastWorkoutsMock));
      setWorkouts(pastWorkoutsMock);
    }
  }, []);

  return (
    <div className='flex flex-col gap-2 max-h-full h-full overflow-y-auto scrollbar scrollbar-thumb-pinkDark scrollbar-thin pr-1'>
      {workouts.length > 0 &&
        workouts.map((workout, idx) => (
          <WorkoutItem
            workout={workout}
            onRemoveClick={() => {
              setWorkouts(prev =>
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
