import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Carousel = ({ slide, style }) => {
  const [count, setCount] = React.useState(0);
  const [slides,] = React.useState(slide);
  
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

  const s = {
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  main: {
    width: '90%',
    height: 'auto'
  },
  imageContainer: {
    // width: '80%',
    // height: 'auto',
  },
  outline: {
    backgroundColor: '#395E66',
    fontFamily: 'Lexend Deca, sans-serif',
    padding: '2rem',
    margin: '2rem auto',
    borderRadius: '5px',
    boxShadow: '-1px 0px 38px 8px rgba(0,0,0,0.51)'
  },
  cursor: {
    cursor: 'pointer',
  }
};

  return ( 
    <section>
      <div
        style={{ ...s.main, ...s.outline, ...s.flex, maxWidth: '75%', maxHeight: 'auto' }}
      >
        <BsArrowLeftCircleFill style={s.cursor} size={75} color={'white'} onClick={scrollLeft} />
        {slideToShow}
        <BsArrowRightCircleFill style={s.cursor} size={75} color={'white'} onClick={scrollRight} />
      </div>
    </section>
  )
};

export default Carousel;