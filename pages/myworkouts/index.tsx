import React, { useEffect, useState } from "react";
import { Stats } from "../../components/Stats/Stats";
import { Accordion } from "../../components/WorkoutsList/Accordion";
import { pastWorkoutsMock } from "../../components/WorkoutsList/utils";
import { WorkoutsList } from "../../components/WorkoutsList/WorkoutsList";
import { IWorkout } from "../../components/WorkoutsList/WorkoutsList.interface";

export const WorkoutsPage = () => {
  return (
    <div className='flex items-center justify-center md:gap-20 h-full'>
      <Stats />
      <WorkoutsList />
    </div>
  );
};

export default WorkoutsPage;
