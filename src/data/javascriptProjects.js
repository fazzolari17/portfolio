import { v4 as uuid } from 'uuid';
import quoteMachine from '../images/randomQuoteGenerator.png';
import markdownPreviewer from '../images/markdownPreviewer.png';
import drumMachine from '../images/drumMachine.png';
import calculator from '../images/javascriptCalculator.png';
import pomodoroTimer from '../images/pomodoroTimer.png';
import patientorApp from '../images/patientorApp.png';
import reactNativeApp from '../images/reactNativeApp.png'

let projects = [
  {
    name: 'Patient Diagnoses App',
    gitHub: 'https://github.com/fazzolari17/Patientor',
    hostedUrl: 'https://patientor-frontend.onrender.com/',
    image: patientorApp,
    language: 'typescript',
    id: uuid(),
    description: `A mock patient diagnoses app written in TypeScript that tracks patients and different diagnoses when they visit a doctor/hospital. The app utilizes forms to add patients and patient diagnoses, modals to collect information as well as type and information verification when new data is added. Data that does not pass the validation tests in the form prevent the form from being submitted and display a message alerting the user to the incorrect and/or required fields. Sometimes it takes a minute to populate the data on this app, I guess that is due to me hosting the backend on a free service. It will populate with the existing data and allow you to add additional data in about a min.`,
},
  {
    name: 'Repository Rating App',
    gitHub: 'https://github.com/fazzolari17/rate-repository-app',
    hostedUrl: 'https://github.com/fazzolari17/rate-repository-app',
    image: reactNativeApp,
    language: 'react native',
    id: uuid(),
    description: `A repository rating app written in react native. The repositories are able to be filtered and searched. Users can sign up, and once they sign in they are able rate the repositories and comment them. In order to demo this app you will have to tun it locally. I have not found an easy or free way to host this online yet. The setup instructions will be in the README file.`,
},
{
    name: 'random quote machine',
    gitHub: 'https://github.com/fazzolari17/projects/tree/main/Random%20Quote%20Generator',
    hostedUrl: 'https://fazzolari17.github.io/projects/',
    image: quoteMachine,
    language: 'javascript',
    id: uuid(),
    description: `One of my very first React Projects. This app was made in order to earn a certificate from Free Code Camp. This was a completely solo project helps to remind myself how far I have come. "Be Better Than You Were Yesterday"`,
},
{
  name: 'markdown previewer',
  gitHub: 'https://github.com/fazzolari17/markdown-previewer',
  hostedUrl: 'https://flourishing-sundae-4007c6.netlify.app/',
  image: markdownPreviewer,
  language: 'javascript',
  id:  uuid(),
  description: `This was another one of my early applications with react.`,
},
{
  name: 'drum machine',
  gitHub: 'https://github.com/fazzolari17/drum-machine',
  hostedUrl: 'https://keen-griffin-6351d2.netlify.app/',
  image: drumMachine,
  language: 'javascript',
  id:  uuid(),
  description: 'Drum machine. Need I say more...? Make some noise! This project focuses on using sound in an application and how to control the sounds as well as having multiple inputs for a sound (mouse click and keyboard selection). Not a terribly complex project but fun and work with audio.',
},
{
  name: 'javascript calculator',
  gitHub: 'https://github.com/fazzolari17/calculator',
  hostedUrl: 'https://warm-pudding-1be669.netlify.app/',
  image: calculator,
  language: 'javascript',
  id:  uuid(),
  description: 'Calculator. I learned that JavaScript needs to be coaxed into doing the same math that the rest of the world does.  No JavaScript 1 + 2 does not equal "12" 🤣! This was a project that looks deceptively simple. The challenges of this projects include dealing with math in javascript, and ensuring that the results are correct at least to an acceptable range (multiple decimal points) for a simple calculator',
},
{
  name: 'pomodoro timer',
  gitHub: 'https://github.com/fazzolari17/25---5-Clock',
  hostedUrl: 'https://elaborate-klepon-8afe3a.netlify.app/',
  image: pomodoroTimer,
  language: 'javascript',
  id:  uuid(),
  description: 'This app showcased keeping accurate time and the time drift that occurs with a setTimeout() or setInterval() as a timekeeper. Although seemingly innocuous losing a few milliseconds every iteration of a setTimeout() or setInterval() leads to a very innacurate clock, rather quickly,  if not handled. This was a fun project and I learned a lot about keeping time and continually updating a component without triggering a rerendering of multiple unintended components, in React, while managing state.',
},

]


export default projects;