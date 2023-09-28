import { useContext } from "react";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import { IWorkout } from "../../types/types";
import { WorkoutsContext } from "../_app";

export const AddWorkoutPage = () => {
  const { myWorkouts, setMyWorkouts } = useContext(WorkoutsContext);
  const handleFormSubmit = (workout: IWorkout) => {
    setMyWorkouts([...myWorkouts, workout]);
    setTimeout(() => localStorage.setItem("workouts", JSON.stringify(myWorkouts)));
  };
  return (
    <div className='flex items-center justify-center h-full w-full md:w-1/2'>
      <WorkoutForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddWorkoutPage;
