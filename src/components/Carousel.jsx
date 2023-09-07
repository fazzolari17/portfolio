import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import useViewport from '../hooks/useViewport';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Carousel = ({ slides, style }) => {
  const { width } = useViewport();

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
    outline: {
      backgroundColor: '#395E66',
      fontFamily: 'Lexend Deca, sans-serif',
      padding: '2rem',
      margin: '2rem auto',
      borderRadius: '5px',
      boxShadow: 'var(--box-shadow, -1px 0px 38px 8px rgba(0,0,0,0.51)'
    },
    cursor: {
      cursor: 'pointer',
    },
    arrows: {
      height: '100%',
      background: 'none',
      color: 'var(--header-background, #071013)'
    }
  };

  const removePadding = width < 561 ? { padding: '0 1rem 2rem 1rem' } : '';

  return (
    <section>
      <div
        style={{
          ...s.main,
          ...s.outline,
          ...s.flex,
          maxWidth: '75%',
          maxHeight: 'auto',
          ...removePadding,
          ...style
        }}

      >
        <ResponsiveCarousel
          infiniteLoop={true}
          showThumbs={width < 960 ? false : true}
          autoPlay={true}
          autoFocus={true}
          useKeyboardArrows={true}
          renderArrowPrev={
            (clickHandler) => <BsArrowLeftCircleFill className='control-arrow control-prev' style={{ ...s.cursor, ...s.arrows }} size={75} onClick={clickHandler} />
          }
          renderArrowNext={
            (clickHandler) => <BsArrowRightCircleFill className='control-arrow control-next' style={{ ...s.cursor, ...s.arrows }} size={75} onClick={clickHandler} />
          }
        >
          {slides}
        </ResponsiveCarousel>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Carousel;