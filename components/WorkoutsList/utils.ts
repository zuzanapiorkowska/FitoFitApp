export const pastWorkoutsMock = [
  {
    id: "1",
    date: "2022-04-10",
    parts: [
      {
        discipline: "running",
        distanceInMeters: 5000,
        durationInSeconds: 1740,
      },
    ],
    notes: "Too much kilometers!",
  },
  {
    id: "2",
    date: "2022-04-11",
    parts: [
      {
        discipline: "swimming",
        distanceInMeters: 2000,
        durationInSeconds: 3480,
      },
      {
        discipline: "cycling",
        distanceInMeters: 7000,
        durationInSeconds: 900,
      },
    ],
    notes: "Rainy day, good mood",
  },
];

export class TimeParts {
  constructor(private timeInSeconds: number) {}

  get hours() {
    const h = Math.floor(this.timeInSeconds / 3600);
    return h < 10 ? `0${h}` : h;
  }
  get minutes() {
    const m = Math.floor((this.timeInSeconds - +this.hours * 3600) / 60);
    return m < 10 ? `0${m}` : m;
  }
  get seconds() {
    const s = this.timeInSeconds - +this.hours * 3600 - +this.minutes * 60;
    return s < 10 ? `0${s}` : s;
  }
}
