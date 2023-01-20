import React from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutsideToCloseMenu = (ref, setIsMenuOpen) => {
  React.useEffect(() => {
    /**
     * Close Menu if clicked outside when it is open
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpen(state => !state)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}

export default useClickOutsideToCloseMenu;