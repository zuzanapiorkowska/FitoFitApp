import React from "react";
import { Stats } from "../../components/Stats/Stats";
import { WorkoutsList } from "../../components/WorkoutsList/WorkoutsList";

export const MyWorkoutsPage = () => {
  return (
    <div className='flex items-center justify-center md:gap-20 h-full w-full'>
      <WorkoutsList />
    </div>
  );
};

export default MyWorkoutsPage;
