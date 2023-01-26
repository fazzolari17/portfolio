import React from 'react';
import style from './styleSheet';
import { capitalized } from '../../util/helperFunctions';
import userImage from '../../images/Image to pull headshot.jpeg';

const Hero = () => {
  const name = 'Giuseppe Fazzolari';
  const jobTitle = 'software engineer';
  const altImgText = 'headshot of the page owner Giuseppe Fazzolari';
  const heroImg = userImage;

  return (
    <section style={style.hero} >
      <div style={style.imgWrapper}>
        <img
          style={style.heroImg}
          src={heroImg} alt={altImgText}
        />
      </div>
      <h1
        style={style.heroH1}>{capitalized(name)}</h1>
      <p style={style.heroP}>{capitalized(jobTitle)}</p>
    </section>
  );
};

export default Hero;