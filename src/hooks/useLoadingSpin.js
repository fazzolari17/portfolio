import React from 'react';
import LoadingSpin from 'react-loading-spin';

const useLoadingSpinner = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const spinner = (
    <LoadingSpin
      primaryColor='var(--hero-background, #395E66)'
      animationTimingFunction='ease-in-out'
      animationDirection='alternate'
      numberOfRotationsInAnimation={3}
    />
  );

  return [
    isLoading ? spinner : null,
    () => setIsLoading(true),
    () => setIsLoading(false)
  ];
};

export default useLoadingSpinner;