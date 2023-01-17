const style = {
  header: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    height: '60px',
    padding: '1em',
    listStyle: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'var(--header-text, #F0F8FF)',
    backgroundColor: 'var(--header-background, #071013)',
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: '1',
  },
  padding: {
    padding: 5
  },
  link: {
    listStyle: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    marginLeft: '2em',
    color: 'var(--header-text, #F0F8FF)'
  },
  currentPage: {
    listStyle: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    marginLeft: '2em',
    color: '#F0F8FF',
    borderBottom: '2px solid #FFF'
  }
}
  
export default style;