import { AddIcon } from "../icons/AddIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { ListIcon } from "../icons/ListIcon";
import { StatsIcon } from "../icons/StatsIcon";
import { WeatherIcon } from "../icons/WeatherIcon";
import { NavItemProps } from "./Navigation.interface";

export const navigationItems: NavItemProps[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  { name: "My workouts", href: "/myworkouts", icon: <ListIcon /> },
  { name: "Add workout", href: "/add", icon: <AddIcon /> },
  { name: "Weather", href: "/weather", icon: <WeatherIcon /> },
];
