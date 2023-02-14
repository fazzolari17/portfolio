import React from 'react';
import style from './styleSheet';
// import Carousel from '../Carousel';
import Section from '../Section';
import Card from '../Card';
import Hero from './Hero';
// import { uppercase } from '../../util/helperFunctions';
// import certifications from '../../data/certifications';
import aboutMe from '../../data/aboutme';

const AboutMe = () => {

  // const renderCertifications = certifications.map(({ certificationUrl, image, altText, id }) => (
  //   <div key={id} style={style.flexCenter}>
  //     <h2 style={style.certificationTitle}>{uppercase('certifications')}</h2>
  //     <a style={style.flexCenter} href={certificationUrl} target={'_blank'} rel={'noreferrer'}>
  //       <img style={style.certificationImg} src={image} alt={altText} />
  //     </a>
  //   </div>
  // ));


  const renderListOfSkills = () => {
    const half = Math.floor(aboutMe.languages.length / 2);
    const leftList = aboutMe.languages.filter((lang, i) => i < half);
    const rightList = aboutMe.languages.filter((lang, i) => i > half);

    const renderLeftList = leftList.map((lang, i) => <li key={`${lang}${i}`}>{lang}</li>);
    const renderRightList = rightList.map((lang, i) => (<li key={`${lang}${i}`}>{lang}</li>));

    return (
      <>
        <div>
          <ul>
            {renderLeftList}
          </ul>
        </div>
        <div>
          <ul>
            {renderRightList}
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
      {/* <Section invert={false}>
        <Carousel slide={renderCertifications} />
      </Section> */}
    </section>
  );
};

export default AboutMe;