import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Layout } from "../components/Layout/Layout";
import "../styles/globals.css";
import { IWorkout, IWorkoutContext } from "../types/types";

export const WorkoutsContext = createContext<IWorkoutContext>({
  myWorkouts: [],
  setMyWorkouts: () => {},
});
function MyApp({ Component, pageProps }) {
  const [myWorkouts, setMyWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    setTimeout(() => localStorage.setItem("workouts", JSON.stringify(myWorkouts)));
  }, [myWorkouts]);

  return (
    <Layout>
      <WorkoutsContext.Provider value={{ myWorkouts, setMyWorkouts }}>
        <Component {...pageProps} />
      </WorkoutsContext.Provider>
    </Layout>
  );
}

export default MyApp;
