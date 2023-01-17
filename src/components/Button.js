const Button = ({ href, buttonName, style }) => {

  const componentStyle = {
    padding: '1rem 1.5rem',
    fontFamily: 'Lexend Deca, sans-serif',
    maxWidth: 'fit-content',
    backgroundColor: 'var(--hero-background, #395E66)',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '-1px 0px 38px 8px rgba(0,0,0,0.51)',
  }

  return (
    <div style={{ ...componentStyle, ...style }}>
      <a href={href} target='_blank' rel='noreferrer' >
        {buttonName}
      </a>
    </div>
  )
};

export default Button