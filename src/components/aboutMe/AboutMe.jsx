import React from 'react';
import style from './styleSheet';
import Carousel from '../Carousel';
import Section from '../Section';
import Card from '../Card';
import Hero from './Hero';
import { uppercase } from '../../util/helperFunctions';
import certifications from '../../data/certifications';
import aboutMe from '../../data/aboutme';
import useViewport from '../../hooks/useViewport';
import { breakpoint } from '../../constants';
import MobileCertificates from './MobileCertificates';

const AboutMe = () => {
  const [isMobile, setIsMobile] = React.useState();
  const { width } = useViewport();

  React.useEffect(() => {
    if (width > breakpoint) setIsMobile(true);
    if (width < breakpoint) setIsMobile(false);
  }, [width]);

  const renderCertifications = certifications.map(({ name, certificationUrl, image, altText, id }) => (
    <div key={id} style={style.flexCenter}>
      <h2 style={style.certificationTitle}>{uppercase(name)}</h2>
      <a style={style.flexCenter} href={certificationUrl} target={'_blank'} rel={'noreferrer'}>
        <img style={style.certificationImg} src={image} alt={altText} />
      </a>
    </div>
  ));


  const renderListOfSkills = () => {
    const half = Math.floor(aboutMe.languages.length / 2);

    const leftList = aboutMe.languages
      .filter((lang, i) => i < half)
      .map((lang, i) => <li key={`${lang}${i}`}>{lang}</li>);

    const rightList = aboutMe.languages
      .filter((lang, i) => i > half)
      .map((lang, i) => (<li key={`${lang}${i}`}>{lang}</li>));

    return (
      <>
        <div>
          <ul>
            {leftList}
          </ul>
        </div>
        <div>
          <ul>
            {rightList}
          </ul>
        </div>
      </>
    );
  };


  return (
    <section className='sectionMargin'>
      <Hero />
      <Section invert={true}>
        <Card invert={true} style={{ maxWidth: '600px' }}>
          <p>
            {aboutMe.description}
          </p>
          <div style={style.listContainer}>
            {renderListOfSkills()}
          </div>
        </Card>
      </Section>
      {
        isMobile
          ?
          <Section invert={false}>
            <Carousel slide={renderCertifications} />
          </Section>
          :
          <MobileCertificates />
      }
    </section>
  );
};

export default AboutMe;