import React from 'react';
import { breakpoint } from '../constants';
import { viewportContext } from '../contexts/ViewportProvider';

const useViewport = () => {
  const [isMobile, setIsMobile] = React.useState(false)
  const { width, height } = React.useContext(viewportContext);

  React.useEffect(() => {
    width < breakpoint ? setIsMobile(true) : setIsMobile(false);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return { width, height, isMobile };
};

export default useViewport;