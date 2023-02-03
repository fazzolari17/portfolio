import React from 'react';
import Home from './Home';

import fallbackImages from '../../data/unsplashFallbackData';

import {
  // selectImageClass,
  selectRandomQuote
} from '../../util/helperFunctions';

import quotes from '../../data/homePageComments';

const axios = require('axios');

const Index = () => {
  const [images, setImages] = React.useState(fallbackImages);
  const [quoteToDisplay, setQuoteToDisplay] = React.useState(selectRandomQuote(quotes));

  const unSplashApiKey = process.env.REACT_APP_API_KEY;
  const searchQuery = 'nature';
  const unSplashUri = `https://api.unsplash.com/photos/random?orientation=landscape&query=${searchQuery}&count=30&client_id=${unSplashApiKey}`;

  const quoteTimeoutTime = 10000;

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(unSplashUri);
        const data = response.data;
        setImages(data);
      } catch (error) {
        console.log(error);
        setImages(fallbackImages);
      }
    };

    if (process.env !== 'test') {
      fetchImages();
    } else {
      setImages(fallbackImages);
    }

    setTimeout(function setQuote() {
      setQuoteToDisplay(selectRandomQuote(quotes));
      clearTimeout();
      setTimeout(setQuote, quoteTimeoutTime);
    }, quoteTimeoutTime);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Home
      images={images}
      quoteToDisplay={quoteToDisplay}
    />
  );
};

export default Index;