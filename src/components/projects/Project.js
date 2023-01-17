import { Link } from 'react-router-dom';
import style  from './styleSheet'; 
import { capitalized, uppercase} from '../../util/helperFunctions';

const Project = ({ title, imageSource, hostedUrl, id }) => {
 


  return (
    <div style={style.flexCenter}>
      <h2 style={{...style.marginBottom, color: 'var(--header-text, #F0F8FF)'}}>{uppercase(title)}</h2>
      <Link style={style.flexCenter} to={`/projects/${id}`}>
        <img style={style.img} src={imageSource} alt='screenshot of project' />
      </Link>
    </div>
  )
};

export default Project;