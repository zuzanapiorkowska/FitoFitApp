# FitoFit App

FitoFit App is an app I created for my current recruitment process :) The main purpose of this app is to present my coding skills. It's written in TypeScript, in Next.js and uses among others:

- Tailwind CSS,
- React Testing Library with Jest,
- Cypress,
- React Hook Form.

The app has been deployed on GitHub pages, so you can easily test it if you want without downloading the code to your machine. Here is the link:
[https://zuzanapiorkowska.github.io/FitoFitApp/](https://zuzanapiorkowska.github.io/FitoFitApp/)

The app allows you to create a record of your cardio workouts and check the weather in a given location. Trainings added in the app are saved in Local Storage because it's only a frontend app. However, it calls an external weather API in the weather tab.

![Home page](https://github.com/zuzanapiorkowska/FitoFitApp/blob/main/public/homePage.png?raw=true)

## Installation

First you have to install all dependencies:

**npm:**

```sh
npm install
```

**yarn:**

```sh
yarn install
```

## Getting Started

Run the app using one of the commands below:

**npm:**

```sh
npm run dev
```

**yarn:**

```sh
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## About the code

The app presents some of my code writing skills, including:

- Writing components and creating files structure in React and Next.js
- Using some of React Hooks: useState, useEffect, useContext (I know others too! ;))
- Setting up and using popular libraries (Tailwind CSS, React Hook Form, React Testing Library, Jest, Cypress)
- Using TypeScript features like: interfaces, enums, types, extending types, picking parts of types
- Writing accessible code
- Using API calls
- Using Local Storage
- Writing tests in React Testing Library using Page Object Model: [Go to RTL tests](https://github.com/zuzanapiorkowska/FitoFitApp/tree/main/components/WorkoutForm/__tests__)
- Writing tests in Cypress: [Go to e2e tests](https://github.com/zuzanapiorkowska/FitoFitApp/tree/main/cypress)
- Creating custom hooks: [See useAccordionHeight hook](https://github.com/zuzanapiorkowska/FitoFitApp/blob/main/components/WorkoutsList/hooks/useAccordionHeight.tsx) or [See useClickOutside hook](https://github.com/zuzanapiorkowska/FitoFitApp/blob/main/components/WorkoutForm/hooks/useClickOutside.tsx)
- Creating basic GitHub actions .yml files: [Go to run-test.yml file](https://github.com/zuzanapiorkowska/FitoFitApp/blob/main/.github/workflows/run-tests.yml) or [See demo PR with GH actions](https://github.com/zuzanapiorkowska/FitoFitApp/pull/2)
- Creating Data Adapter: [See data adapter](https://github.com/zuzanapiorkowska/FitoFitApp/blob/main/components/WeatherForecast/DTO/WeatherDataAdapter.ts)

### Litte explanation:

I didn't add .env file to .gitignore because:

- this env (the only one in the project) is exposed as part of the request url anyway
- I wanted the app to work properly after deploying it on GitHub paes
