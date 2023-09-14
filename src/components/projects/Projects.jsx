import React from 'react';
import projectData from '../../data/javascriptProjects';
import Section from '../Section';
import Carousel from '../Carousel';
import { uppercase } from '../../util/helperFunctions';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [slides,] = React.useState(
    projectData.map(({ name, _hostedUrl, image, _gitub, id }) => {
      return (<div key={id}>
        <img src={image} alt={name} />
        <Link to={`/projects/${id}`}>
          <p className='legend'>{name}</p>
        </Link>
      </div>);
    })
  );


  return (
    <div className='sectionMargin'>
      <h1 style={{ textAlign: 'center' }}>
        {uppercase('projects')}
      </h1>
      <Section  invert={false}>
        <Carousel slides={slides} />
      </Section>
    </div>
  );
};

export default Projects;
