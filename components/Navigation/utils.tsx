import { AddIcon } from "./icons/AddIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { ListIcon } from "./icons/ListIcon";
import { StatsIcon } from "./icons/StatsIcon";
import { WeatherIcon } from "./icons/WeatherIcon";
import { NavItemProps } from "./Navigation.interface";

export const navigationItems: NavItemProps[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  { name: "My workouts", href: "/workouts", icon: <ListIcon /> },
  { name: "Stats", href: "/stats", icon: <StatsIcon /> },
  { name: "Add workout", href: "/add", icon: <AddIcon /> },
  { name: "Check weather", href: "/weather", icon: <WeatherIcon /> },
];
