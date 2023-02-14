import React from 'react';
import Card from '../Card';
import projectData from '../../data/javascriptProjects';
import Project from './Project';

const MobileProjects = () => {
  const [projects] = React.useState(projectData);

  const style = {
    main: {
      padding: '4rem 0 1.5rem 0',
      background: 'var(--header-text, #FOF8F8)'
    }
  };

  const mappedProjects = projects.map(({ name, hostedUrl, image, id }) => (
    <Card key={id} shadow={false} style={{ width: '95%' }}>
      <Project id={id} title={name} hostedUrl={hostedUrl} imageSource={image} />
    </Card>
  ));

  return (
    <section style={ style.main }>
      {mappedProjects}
    </section>
  );
};

export default MobileProjects;