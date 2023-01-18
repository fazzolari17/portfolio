const style = {
  invert: {
    padding: '1rem',
    backgroundColor: 'var(--header-background, #071013)',
    color: 'var(--heaader-text, #F0F8FF)'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  hero: {
    fontFamily: 'Lexend Deca, sans-serif',
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '300px',
    backgroundColor: 'var(--hero-background, #395E66)',
    borderRadius: '5px',
    boxShadow: '-1px 0px 38px 8px rgba(0,0,0,0.51)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgWrapper: {
    overflow: 'hidden',
    width: '150px',
    height: '300px',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    objectFit: 'cover',
    objectPosition: '25% 20px',
    transform: 'scale(1.85)'

  },
  heroH1: {
    marginTop: '1rem',
    color: 'var(--header-text, #F0F8FF)',
  },
  heroP: {
    color: 'var(--hero-secondaryText, #C1AE7C)',
    fontFamily: 'Ubuntu sans-serif',
  }, 
  listContainer: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  certificationTitle: {
     marginBottom: '1rem' 
  },
  sectionWidth: {
    width: '100vw',
  },
  certificationImg: {
    width: '70%',
    height: 'auto'
  }
};

export default style;