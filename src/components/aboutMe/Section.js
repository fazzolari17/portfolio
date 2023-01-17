import style from './styleSheet';

const Section = ({ children, invert }) => {

  const backgroundStyle = invert ? { ...style.invert, ...style.flex } : style.flex;
  
  return (
    <section style={backgroundStyle}>
      {children}
    </section>
  )
};

export default Section;
