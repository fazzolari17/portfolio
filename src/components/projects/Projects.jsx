import React from 'react';
import Project from './Project';
import projectData from '../../data/javascriptProjects';
import Section from '../Section';
import Carousel from '../Carousel';

const Projects = () => {
  const [slides, ] = React.useState(
    projectData.map(({ name, hostedUrl, image, github, id }) => (
      <Project id={id} title={name} hostedUrl={hostedUrl} imageSource={image} />
    ))
  );
  
  

  return ( 
    <Section className='sectionMargin' invert={false}>
      <Carousel slide={slides} />
    </Section>
  )
};

export default Projects;
