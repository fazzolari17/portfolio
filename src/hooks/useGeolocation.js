import React from 'react';

const useGeolocation = () => {
  const [geolocation, setGeolocation] = React.useState({
    latitude: null,
    longitude: null,
    accuracy: null,
  });


  React.useEffect(() => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((permissionStatus) => {
        if (permissionStatus.state === 'prompt') {
          setGeolocation({ latitude: null, longitude: null, accuracy: null });
          // navigator.geolocation.getCurrentPosition((loc) => {
          //   setGeolocation({ latitude: loc.coords.latitude, longitude: loc.coords.longitude, accuracy: loc.coords.accuracy });
          // });
        } else if (permissionStatus.state === 'granted') {
          navigator.geolocation.getCurrentPosition((loc) => {
            setGeolocation({ latitude: loc.coords.latitude, longitude: loc.coords.longitude, accuracy: loc.coords.accuracy });
          });
        } else if (permissionStatus.state === 'denied') {
          setGeolocation({
            latitude: null,
            longitude: null,
            accuracy: null,
          });
        }
      })
      .catch((error) => {
        console.error('Error checking geolocation permission:', error);
      });


  });

  return geolocation;
};

export default useGeolocation;
