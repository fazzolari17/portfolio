import userImage from '../../images/american-digger.giuseppe-savage.jpg';
import style from './styleSheet';
import { capitalized } from '../../util/helperFunctions';

const Hero = () => {
  const name = 'Giuseppe Fazzolari';
  const jobTitle = 'software engineer';
  const altImgText = 'headshot of the page owner Giuseppe Fazzolari';
  const heroImg = userImage;

  return (
    <section style={style.hero} >
        <img
          style={style.heroImg}
          src={heroImg} alt={altImgText}
        />
        <h1
        style={style.heroH1}>{capitalized(name)}</h1>
        <p style={style.heroP}>{capitalized(jobTitle)}</p>
      </section>
  )
};

export default Hero;