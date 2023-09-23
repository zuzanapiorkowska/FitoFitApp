import React from "react";
import { Accordion } from "../../components/WorkoutCard/Accordion";

export const WorkoutsPage = () => {
  return (
    <div>
      <Accordion children='children' title='title' />
    </div>
  );
};

export default WorkoutsPage;
