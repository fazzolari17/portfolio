import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutsideToCloseMenu = (ref, setIsMenuOpen) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setIsMenuOpen(state => !state);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickOutsideToCloseMenu;
/**
 * Component that alerts if you click outside of it
 */
// export default function OutsideAlerter(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return <div ref={wrapperRef}>{props.children}</div>;
// }