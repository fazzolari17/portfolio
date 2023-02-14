import React from 'react';
import style from './styleSheet';
import { useParams } from 'react-router-dom';
import { capitalized } from '../../util/helperFunctions';
import projectData from '../../data/javascriptProjects';

import Card from '../Card';
import Button from '../Button';
import useViewport from '../../hooks/useViewport';
import { breakpoint } from '../../constants';

const ProjectDetail = () => {
  const parameterId = useParams().id;
  const { width } = useViewport();

  const mobileStyle = width < breakpoint ? { width: '95%' } : '';

  const { name, gitHub, hostedUrl, image, description } = projectData.find(({ id }) => id === parameterId);


  return (
    <section className='sectionMargin'>
      <h1 style={style.projectTitle}>{capitalized(name)}</h1>

      <Card style={mobileStyle}>
        <a href={hostedUrl} target='_blank' rel='noreferrer'>
          <img style={style.imageContainer} src={image} alt={`screenshot of the ${name} project`} />
        </a>
      </Card>

      <Card style={mobileStyle}>
        <p style={style.cardWidth}>
          {description}
        </p>
      </Card>

      <Card style={style.buttonContainer}>
        <Button
          href={gitHub} buttonName={'Repository'} />
        <Button href={hostedUrl} buttonName={'app demo'} />
      </Card>

    </section>
  );
};

export default ProjectDetail;