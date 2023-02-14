import React from 'react';
import Project from './Project';
import projectData from '../../data/javascriptProjects';
import Section from '../Section';
import Carousel from '../Carousel';
import { uppercase } from '../../util/helperFunctions';

const Projects = () => {
  const [slides, ] = React.useState(
    projectData.map(({ name, hostedUrl, image, _github, id }) => (
      <Project key={id} id={id} title={name} hostedUrl={hostedUrl} imageSource={image} />
    ))
  );



  return (
    <div className='sectionMargin'>
      <h1 style={{ textAlign: 'center' }}>
        {uppercase('projects')}
      </h1>
      <Section  invert={false}>
        <Carousel slide={slides} />
      </Section>
    </div>
  );
};

export default Projects;
