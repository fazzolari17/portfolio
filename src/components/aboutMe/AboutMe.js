// import mainImage from '../../images/american-digger.giuseppe-savage.jpg';
import { Link } from 'react-router-dom';
import style from './styleSheet';
import s from '../projects/styleSheet';
import Hero from './Hero';
import Section from './Section';
import Card from '../Card';
import { uppercase } from '../../util/helperFunctions';
import certifications from '../../data/certifications';
import Carousel from '../Carousel';

const AboutMe = () => {
  const numberOfCertifications = 8;

  const renderCertifications = certifications.map(({ certificationUrl, image, altText, id }) => (
    <div style={s.flexCenter}>
      <h2 style={style.certificationTitle}>{uppercase('certifications')}</h2>
      <a style={style.flexCenter} href={certificationUrl} target={'_blank'} rel={'noreferrer'}>
          <img style={style.certificationImg} src={image} alt={altText} />
        </a>
    </div>
  ))

  return (
    <section className='sectionMargin'>
      <Hero />
      <Section invert={true}>
        <Card invert={true} style={{maxWidth: '600px'}}>
        <p>
           {` I'm an avid hiker, biker, backcountry camper, and hanger(Hammocking). I Love all things outdoors, and have a passion for learning. I have an analytical mind and shine when I am problem solving. I am happiest when I am creating something. I have a very diverse career background that has left me with a very unique and large skill set. I have multiple(${numberOfCertifications} at the moment) certifications in tech related fields. My current experience includes REST API, MERN, CRUD, CI/CD, TDD. Plus, I can read the shit out of documentation! `}
          </p>
          <div style={style.listContainer}>
            <div>
              <ul>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>React</li>
                <li>Node</li>
                <li>React Native</li>
                <li>Mongo Db</li>
                <li>Express</li>
           
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Jest</li>
                <li>Mocha</li>
                <li>Cypress E2E</li>
            
              </ul>
            </div>

          </div>
        </Card>
      </Section>
      <Section invert={false}>
          <Carousel slide={renderCertifications} />
      </Section>
    </section>
  )
};

export default AboutMe;