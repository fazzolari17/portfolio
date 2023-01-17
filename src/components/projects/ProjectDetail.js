import style from './styleSheet';
import { useParams } from 'react-router-dom';
import projectData from '../../data/javascript';
import { capitalized } from '../../util/helperFunctions';

import Card from '../Card';
import Button from '../Button';

const ProjectDetail = () => {
  const parameterId = useParams().id;

  const { name, gitHub, hostedUrl, image, description } = projectData.find(({id}) => id === parameterId);


  return (
    <section className='sectionMargin'>
      <h1 style={style.projectTitle}>{capitalized(name)}</h1>

      <Card>
        <a href={hostedUrl} target='_blank' rel='noreferrer'>
          <img style={style.imageContainer} src={image} alt={`screenshot of the ${name} project`} />
        </a>
      </Card>

      <Card >
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
  )
};

export default ProjectDetail;