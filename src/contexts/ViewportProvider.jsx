import React from 'react';
import PropTypes from 'prop-types';
import { breakpoint } from '../constants';
import { useContext } from 'react';

export const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [isMobile, setIsMobile] = React.useState(width <= breakpoint);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      (width <= breakpoint) ? setIsMobile(true) : setIsMobile(false);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);

  return (
    <viewportContext.Provider value={{ width, height, isMobile }}>
      {children}
    </viewportContext.Provider>
  );
};

ViewportProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export const useIsMobile = () => useContext(viewportContext);

export default ViewportProvider;