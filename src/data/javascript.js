import { v4 as uuid } from 'uuid';
import quoteMachine from '../images/randomQuoteGenerator.png';
import markdownPreviewer from '../images/markdownPreviewer.png';
import drumMachine from '../images/drumMachine.png';
import calculator from '../images/javascriptCalculator.png';
import pomodoroTimer from '../images/pomodoroTimer.png';
import patientorApp from '../images/patientorApp.png';

let projects = [
  {
    name: 'Patient Diagnoses App',
    gitHub: 'https://github.com/fazzolari17/Patientor',
    hostedUrl: 'https://patientor-ccvj.onrender.com/',
    image: patientorApp,
    language: 'typescript',
    id: uuid(),
    description: `A mock patient diagnoses app written in TypeScript that tracks patients and different diagnoses when they visit a doctor/hospital. The app utilizes forms to add patients and patient diagnoses, modals to collect information as well as type and information verification when new data is added.`,
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
  description: `This was another early application that was made to for the front-end certificate. The hamburger icon in the corner of the demo page will reveal the test suite that I needed to satisfy in order to pass the exercise. Select the hamburger icon and select the markdown previewer to run the test suite and see the tests. Not necessarily my best work but I chose to show these to detail my progression. The goal is to be "better than I was yesterday".`,
},
{
  name: 'drum machine',
  gitHub: 'https://github.com/fazzolari17/drum-machine',
  hostedUrl: 'https://keen-griffin-6351d2.netlify.app/',
  image: drumMachine,
  language: 'javascript',
  id:  uuid(),
  description: 'Drum machine. Need I say more...? Make some noise!',
},
{
  name: 'javascript calculator',
  gitHub: 'https://github.com/fazzolari17/calculator',
  hostedUrl: 'https://warm-pudding-1be669.netlify.app/',
  image: calculator,
  language: 'javascript',
  id:  uuid(),
  description: 'Calculator. I learned that JavaScript needs to be coaxed into doing the same math that the rest of the world does. No JavaScript 1 + 2 does not equal "12" 🤣! ',
},
{
  name: 'pomodoro timer',
  gitHub: 'https://github.com/fazzolari17/25---5-Clock',
  hostedUrl: 'https://elaborate-klepon-8afe3a.netlify.app/',
  image: pomodoroTimer,
  language: 'javascript',
  id:  uuid(),
  description: 'This app showcased keeping accurate time and the time drift that occurs with a setTimeout() or setInterval() as a timekeeper. Although seemingly innocuous losing a few milliseconds every iteration of a setTimeout() or setInterval() leads to a very innacurate clock, rather quickly,  if not handled.',
},

]


export default projects;