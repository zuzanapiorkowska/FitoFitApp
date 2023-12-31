import classNames from "classnames";
import { useEffect, useState } from "react";
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

  const [isMockInfoDisplayed, setIsMockInfoDisplayed] = useState<boolean>(false);

  useEffect(() => {
    const areMocksDisplayed = myWorkouts.find(workout => workout.id === "1" || workout.id === "2");
    if (areMocksDisplayed) {
      setIsMockInfoDisplayed(true);
    } else {
      setIsMockInfoDisplayed(false);
    }
  }, [myWorkouts]);

  return (
    <div
      className={classNames(
        "flex flex-col gap-2 max-h-full h-full pr-1 max-w-[360px]",
        "overflow-y-auto scrollbar scrollbar-thumb-pinkDark scrollbar-thin"
      )}>
      {isMockInfoDisplayed && (
        <p className='p-2 rounded-md text-xs bg-white bg-opacity-30 text-violetExtraDark'>
          To present the operation of the application, demo training sessions are displayed. You can
          add your own sessions and remove demo workout items.
        </p>
      )}
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
            key={workout.id}
          />
        ))}
    </div>
  );
};
