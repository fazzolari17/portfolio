import React from 'react';
import style from './styleSheet';

import Section from '../Section';
import Card from '../Card';
import Hero from './Hero';

import aboutMe from '../../data/aboutme';


const AboutMe = () => {

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
      {/* decide if I want to show the certifications or not */}
      {/* {
        isMobile
          ?
          <Section invert={false}>
            <Carousel slides={renderCertifications} />
          </Section>
          :
          <MobileCertificates />
      } */}
    </section>
  );
};

export default AboutMe;