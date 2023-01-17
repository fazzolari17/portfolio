import React from 'react';
import Project from './Project';
import projectData from '../../data/javascript';
import s from './styleSheet'; 
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Projects = () => {
  const [count, setCount] = React.useState(0);
  const [slides, ] = React.useState(
    projectData.map(({ name, hostedUrl, image, github, id }) => (
      <Project id={id} title={name} hostedUrl={hostedUrl} imageSource={image} />
    ))
  );
  
  const slideToShow = slides.find((item, index) => index === count);

  const scrollLeft = () => {
    const endOfSlide = slides.length - 1;

    if (count === 0) return setCount(endOfSlide);
    setCount(prevCount => prevCount-=1);
  };
  
  const scrollRight = () => {
    const endOfSlide = slides.length - 1;
    
    if (count === endOfSlide) return setCount(0);
    setCount(prevCount => prevCount += 1);

  };

  return ( 
    <section className='sectionMargin'>
      <div style={{ ...s.main,  ...s.outline, ...s.flex }}>
        <BsArrowLeftCircleFill style={s.cursor} size={75} color={'white'} onClick={scrollLeft} />
        {slideToShow}
        <BsArrowRightCircleFill style={s.cursor} size={75} color={'white'} onClick={scrollRight} />
      </div>
    </section>
  )
};

export default Projects;
