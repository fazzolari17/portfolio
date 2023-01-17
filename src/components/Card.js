const Card = ({children, style, invert, className }) => {

  const background = invert ? 'var(--header-contrastColor, #75ABBC)' : 'var(--hero-background, #395E66)';
  const textColor = invert ? 'var(--header-background, #071013)' : 'var(--header-text, #F0F8FF)';
  
  const componentStyle = {
    fontFamily: 'Lexend Deca, sans-serif',
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: 'fit-content',
    backgroundColor: background,
    color: textColor,
    borderRadius: '5px',
    boxShadow: '-1px 0px 38px 8px rgba(0,0,0,0.51)',
  }
  
  return (
    <section style={{ ...componentStyle, ...style }} className={className}>
      {children}
    </section>
  )
};

export default Card;