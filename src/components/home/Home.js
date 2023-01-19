import axios from 'axios';
import React from 'react';
import fallbackImages from '../../data/unsplashFallbackData';
import {
  selectImageClass,
  selectRandomQuote
} from '../../util/helperFunctions';
import Card from '../Card';
import quotes from '../../data/homePageComments';
import style from './styleSheet';
// import Button from '../Button';

const Home = () => {
  const [images, setImages] = React.useState(fallbackImages);
  const [quoteToDisplay, setQuoteToDisplay] = React.useState(quotes[1]);
  
  const unSplashApiKey = process.env.REACT_APP_API_KEY;
  const searchQuery = 'nature';
  
  const quoteTimeoutTime = 10000;
  
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=${searchQuery}&count=30&client_id=${unSplashApiKey}`).catch(error => console.error(error));
        const data = response.data;
        setImages(data);
      } catch (error) {
        console.log(error);
        setImages(fallbackImages);
      }
    }
    fetchImages()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let renderPhotos = images.map((photo, index) => {
    return <img key={photo.id} className={selectImageClass(index)} src={photo.urls.small} alt={photo.alt_description} />
  })

  // const changeQuote = () => {
  //   setQuoteToDisplay(selectRandomQuote(quotes));
  // }

  
  setTimeout(function setQuote(){
    setQuoteToDisplay(selectRandomQuote(quotes));
    setTimeout(setQuote, quoteTimeoutTime);
  }, quoteTimeoutTime);

  
  return (
    <>
      <div className='gallery'>
        {renderPhotos}
      </div>
      <div style={style.quoteContainer}>
        <Card style={style.quoteCard}>
          {quoteToDisplay.text}
          <div style={style.quoteAuthor}>{`- ${quoteToDisplay.author}`}</div>
          {/* <Button style={{ alignSelf: 'flex-end', justifySelf: 'flex-end', marginTop: '1rem', color: 'var(--header-background, #071013)' }} invert={true} buttonName={'Next Quote'} handleClick={changeQuote} /> */}
        </Card>
      </div>
    </>
  )
};

export default Home;