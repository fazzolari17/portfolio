import React from 'react';
import quoteMachine from '../images/randomQuoteGenerator.png';
import markdownPreviewer from '../images/markdownPreviewer.png';
import drumMachine from '../images/drumMachine.png';
import calculator from '../images/javascriptCalculator.png';
import pomodoroTimer from '../images/pomodoroTimer.png';
import patientorApp from '../images/patientorApp.png';
import reactNativeApp from '../images/reactNativeApp.png';

let projects = [
  {
    name: 'Patient Diagnoses App',
    gitHub: 'https://github.com/fazzolari17/Patientor',
    hostedUrl: 'https://patientor-frontend.onrender.com/',
    image: patientorApp,
    language: 'typescript',
    id: '045736a7-69ec-4c58-8161-c1f7a8a05772',
    description: <>A mock patient diagnoses app both the frontend and backend are written in React/TypeScript that tracks patients and different diagnoses when they visit a doctor/hospital. Patient and user data are persisted in a MongoDB database. If you do not wish to make your own account you can use the root account to check out the app. Login Credentials: <br/> { `email: root@gmail.com`} <br/> {`password: password` }</>,
  },
  {
    name: 'Repository Rating App',
    gitHub: 'https://github.com/fazzolari17/rate-repository-app',
    hostedUrl: 'https://github.com/fazzolari17/rate-repository-app',
    image: reactNativeApp,
    language: 'react native',
    id: '7d2ceb6e-5e5a-4260-89ae-da17829f3ae0',
    description: `A repository rating app written in react native. The repositories are able to be filtered and searched. Users can sign up, and once they sign in they are able rate the repositories and comment them. In order to demo this app you will have to run it locally. The setup instructions will be in the README file.`,
  },
  {
    name: 'random quote machine',
    gitHub: 'https://github.com/fazzolari17/projects/tree/main/Random%20Quote%20Generator',
    hostedUrl: 'https://fazzolari17.github.io/projects/',
    image: quoteMachine,
    language: 'javascript',
    id: '54cc6268-c01b-4621-80c4-1d2b3002e6d7',
    description: `One of my very first React Projects.`,
  },
  {
    name: 'markdown previewer',
    gitHub: 'https://github.com/fazzolari17/markdown-previewer',
    hostedUrl: 'https://flourishing-sundae-4007c6.netlify.app/',
    image: markdownPreviewer,
    language: 'javascript',
    id: '3a6aec49-767f-4c21-ac63-304f30f913b9',
    description: `This was another one of my early applications with react.`,
  },
  {
    name: 'drum machine',
    gitHub: 'https://github.com/fazzolari17/drum-machine',
    hostedUrl: 'https://keen-griffin-6351d2.netlify.app/',
    image: drumMachine,
    language: 'javascript',
    id: '1ae704d4-d68b-49c6-b68d-319342f1fefb',
    description: 'Drum machine. Need I say more...? Make some noise! This project focuses on using sound in an application and how to control the sounds as well as having multiple inputs for a sound (mouse click and keyboard selection). Not a terribly complex project but fun and work with audio.',
  },
  {
    name: 'javascript calculator',
    gitHub: 'https://github.com/fazzolari17/calculator',
    hostedUrl: 'https://warm-pudding-1be669.netlify.app/',
    image: calculator,
    language: 'javascript',
    id: 'cd8537b1-d61b-4c68-9560-b01ca03df9aa',
    description: 'Calculator. I learned that JavaScript needs to be coaxed into doing the same math that the rest of the world does.  No JavaScript 1 + 2 does not equal "12" 🤣! This was a project that looks deceptively simple. The challenges of this projects include dealing with math in javascript, and ensuring that the results are correct at least to an acceptable range (multiple decimal points) for a simple calculator',
  },
  {
    name: 'pomodoro timer',
    gitHub: 'https://github.com/fazzolari17/25---5-Clock',
    hostedUrl: 'https://elaborate-klepon-8afe3a.netlify.app/',
    image: pomodoroTimer,
    language: 'javascript',
    id: 'f2bbbaee-1f34-45df-8c2c-ce7ccac96cae',
    description: 'This app showcased keeping accurate time and the time drift that occurs with a setTimeout() or setInterval() as a timekeeper. Although seemingly innocuous losing a few milliseconds every iteration of a setTimeout() or setInterval() leads to a very innacurate clock, rather quickly,  if not handled. This was a fun project and I learned a lot about keeping time and continually updating a component without triggering a rerendering of multiple unintended components, in React, while managing state.',
  },

];


export default projects;