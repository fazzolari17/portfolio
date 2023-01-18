import componentStyle from './aboutMe/styleSheet';

const Section = ({ children, invert, style, className }) => {

  const backgroundStyle = invert ? { ...componentStyle.invert, ...componentStyle.flex } : componentStyle.flex;
  
  return (
    <section style={{ ...backgroundStyle, ...componentStyle.sectionWidth }} className={className}>
      {children}
    </section>
  )
};

export default Section;
