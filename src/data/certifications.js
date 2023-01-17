import { v4 as uuid } from 'uuid';
import fullStackOpenCertificate from '../images/certifications/fullStackOpenCertificate.png';
import reactNativeCertificate from '../images/certifications/reactNativeCertification.png';
import typeScriptCertificate from '../images/certifications/typeScriptCertification.png';
import graphQlCertificate from '../images/certifications/graphQlCertification.png';
import responsiveWebDesign from '../images/certifications/responsiveWebDesign.png';
import JavaScript from '../images/certifications/javaScriptAlgorithmsAndDataStructuresCertification.png';
import frontEndDevelopment from '../images/certifications/frontEndDevelopmentLibrariesCertification.png';
import backEndDevelopment from '../images/certifications/backEndDevelopmentAndApisCertification.png';

const certifications = [
  {
    name: 'Responsive Web Design',
    issuer: 'Free Code Camp',
    certificationUrl: 'https://www.freecodecamp.org/certification/fazzolari17/responsive-web-design',
    image: responsiveWebDesign,
    dateIssued: 'December 15, 2022',
    altText: 'image of responsive web design certification from FreeCodeCamp'
  },
  {
    name: 'Javascript Algorithms and Data Structures',
    issuer: 'Free Code Camp',
    certificationUrl: 'https://www.freecodecamp.org/certification/fazzolari17/javascript-algorithms-and-data-structures',
    image: JavaScript,
    dateIssued: 'December 11, 2022',
    altText: 'image of javascript algorithm and data structures certification from FreeCodeCamp',
    id: uuid(),
  },
  {
    name: 'Front End Development Libraries',
    issuer: 'Free Code Camp',
    certificationUrl: 'https://www.freecodecamp.org/certification/fazzolari17/front-end-development-libraries',
    image: frontEndDevelopment,
    dateIssued: 'December 20, 2022',
    altText: 'image of front end development libraries certification from FreeCodeCamp',
    id: uuid(),
  },
  {
    name: 'Back End Development and APIs',
    issuer: 'Free Code Camp',
    certificationUrl: 'https://www.freecodecamp.org/certification/fazzolari17/back-end-development-and-apis',
    image: backEndDevelopment,
    dateIssued: 'December 31, 2022',
    altText: 'image of back end development and apis certification from FreeCodeCamp',
    id: uuid(),
  },
  {
    name: 'Full Stack Open',
    issuer: 'University of Helsinki',
    certificationUrl: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/a8ada8c5de7edaba9b9cdedff5db4ac6',
    respitory: 'https://github.com/fazzolari17/FullStackOpen',
    image: fullStackOpenCertificate,
    dateIssued: 'September 08, 2022',
    altText: 'image of full stack open certification from University of Helsinki',
    id: uuid(),
  },
  {
    name: 'Full Stack Open GraphQL',
    issuer: 'University of Helsinki',
    certificationUrl: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/78ea544279d32b85e25f99200b52a7e7',
    respitory: 'https://github.com/fazzolari17/FullStackOpen/tree/main/Part8',
    image: graphQlCertificate,
    dateIssued: 'September 25, 2022',
    altText: 'image of Graph QL certification from University of Helsinki',
    id: uuid(),
  },
  {
    name: 'Full Stack Open TypeScript',
    issuer: 'University of Helsinki',
    certificationUrl: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/4ab1eda0b29841a0e8dfca80acb44ece',
    respitory: 'https://github.com/fazzolari17/FullStackOpen/tree/main/Part9',
    image: typeScriptCertificate,
    dateIssued: 'November 04, 2022',
    altText: 'image of typescript certification from University of Helsinki',
    id: uuid(),
  },
  {
    name: 'Full Stack Open React Native',
    issuer: 'University of Helsinki',
    certificationUrl: 'https://studihttps://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/62bfdca414950bc87b8dc7a8032e561ees.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/78ea544279d32b85e25f99200b52a7e7',
    respitory: 'https://github.com/fazzolari17/rate-repository-app',
    image: reactNativeCertificate,
    dateIssued: 'November 25, 2022',
    altText: 'image of react native certification from University of Helsinki',
    id: uuid(),
  },
];


export default certifications;