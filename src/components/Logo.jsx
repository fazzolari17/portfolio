import React from 'react';
import PropTypes from 'prop-types';


const GFLogo = ({
  size = 200,
  gColor = '#F0F8FF',
  fColor = '#75ABBC',
  weight = 600,
  className = '',
  x = 20,
  y = 120,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 200 200'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <style>
        {`
          .gf-text {
            font-family: 'Lexend Deca', sans-serif;
            font-weight: ${weight};
          }
        `}
      </style>

      {/* G (Top Letter) */}
      <text
        x={x}
        y={y}
        textAnchor='middle'
        className='gf-text'
        fontSize='48'
        fill={gColor}
      >
        G
      </text>

      {/* F (Overlapping From Bottom) */}
      <text
        x={x*2}
        y={y+30}
        textAnchor='middle'
        className='gf-text'
        fontSize='60'
        fill={fColor}
      >
        F
      </text>
    </svg>
  );
};


GFLogo.propTypes = {
  size: PropTypes.string,
  gColor: PropTypes.string,
  fColor: PropTypes.string,
  className: PropTypes.string,
  weight: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};

export default GFLogo;