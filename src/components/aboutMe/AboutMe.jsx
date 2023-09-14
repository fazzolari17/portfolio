import React from 'react';
import style from './styleSheet';
// import Carousel from '../Carousel';
import Section from '../Section';
import Card from '../Card';
import Hero from './Hero';
// import { uppercase } from '../../util/helperFunctions';
// import certifications from '../../data/certifications';
import aboutMe from '../../data/aboutme';
// import useViewport from '../../hooks/useViewport';
// import { breakpoint } from '../../constants';
// import MobileCertificates from './MobileCertificates';

const AboutMe = () => {
  // const [isMobile, setIsMobile] = React.useState();
  // const { width } = useViewport();

  // React.useEffect(() => {
  //   if (width > breakpoint) setIsMobile(true);
  //   if (width < breakpoint) setIsMobile(false);
  // }, [width]);


  // const renderCertifications = certifications.map(({ name, certificationUrl, image, altText, id }) => (
  //   <div key={id} style={style.flexCenter}>
  //     <img style={style.certificationImg} src={image} alt={altText} />
  //     <a href={certificationUrl} target={'_blank'} rel={'noreferrer'}>
  //       <p className="legend" style={style.legend}>{uppercase(name)}</p>
  //     </a>
  //   </div>
  // ));


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