import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import images from '../../data/unsplashFallbackData';
import quotes from '../../data/homePageComments';



describe('home page', () => {
  beforeEach(() => {
    render(
      <Home
        images={images}
        quoteToDisplay={quotes[0]}
      />
    );
  });
  describe('home', () => {
    it('renders the page and dispays background of 30 photos', () => {

      const image1 = screen.getByAltText(/sun set over the horizon/i);
      const image2 = screen.getByAltText(/brown leafed tree near bed of yellow flowers/i);
      const image3 = screen.getByAltText(/snow-covered mountain during a twilight sky/i);
      const image4 = screen.getByAltText(/scenery of mountain canyon/i);
      const image5 = screen.getByAltText(/green trees/i);
      const image6 = screen.getByAltText(/closeup photo of yellow sunflowers/i);
      const image7 = screen.getByAltText(/birds eye view photography of cloudy sky/i);
      const image8 = screen.getByAltText(/scenery of a grassfield during sunset/i);
      const image9 = screen.getByAltText(/rainbow near green grass ranges/i);
      const image10 = screen.getByAltText(/ocean near trees and rocks/i);
      const image11 = screen.getByAltText(/silhouette of person standing on rock surrounded by body of water/i);
      const image12 = screen.getByAltText(/ice bergs and alp mountains facing calm body of water/i);
      const image13 = screen.getByAltText(/brown tree trunks lot/i);
      const image14 = screen.getByAltText(/sand landscape/i);
      const image15 = screen.getByAltText(/seashore/i);
      const image16 = screen.getByAltText(/green leaf trees under blue sky/i);
      const image17 = screen.getByAltText(/lavender field/i);
      const image18 = screen.getByAltText(/landscape photo of brown mountain/i);
      const image19 = screen.getByAltText(/brown rock formation under blue sky/i);
      const image20 = screen.getByAltText(/white sand/i);
      const image21 = screen.getByAltText(/photography of mountain during sunset/i);
      const image22 = screen.getByAltText(/brown wooden dock between lavender flower field near body of water during golden hour/i);
      const image23 = screen.getByAltText(/lake with mountain reflections/i);
      const image24 = screen.getByAltText(/trees under cloudy sky during sunset/i);
      const image25 = screen.getByAltText(/worms eye view of forest during day time/i);
      const image26 = screen.getByAltText(/orange flowers/i);
      const image27 = screen.getByAltText(/island during daytime/i);
      const image28 = screen.getByAltText(/closeup photo of green leafed plants/i);
      const image29 = screen.getByAltText(/landscape photography of brown mountain/i);
      const image30 = screen.getByAltText(/rule of thirds photography of pink and white lotus flower floating on body of water/i);

      expect(image1).toBeInTheDocument();
      expect(image2).toBeInTheDocument();
      expect(image3).toBeInTheDocument();
      expect(image4).toBeInTheDocument();
      expect(image5).toBeInTheDocument();
      expect(image6).toBeInTheDocument();
      expect(image7).toBeInTheDocument();
      expect(image8).toBeInTheDocument();
      expect(image9).toBeInTheDocument();
      expect(image10).toBeInTheDocument();
      expect(image11).toBeInTheDocument();
      expect(image12).toBeInTheDocument();
      expect(image13).toBeInTheDocument();
      expect(image14).toBeInTheDocument();
      expect(image15).toBeInTheDocument();
      expect(image16).toBeInTheDocument();
      expect(image17).toBeInTheDocument();
      expect(image18).toBeInTheDocument();
      expect(image19).toBeInTheDocument();
      expect(image20).toBeInTheDocument();
      expect(image21).toBeInTheDocument();
      expect(image22).toBeInTheDocument();
      expect(image23).toBeInTheDocument();
      expect(image24).toBeInTheDocument();
      expect(image25).toBeInTheDocument();
      expect(image26).toBeInTheDocument();
      expect(image27).toBeInTheDocument();
      expect(image28).toBeInTheDocument();
      expect(image29).toBeInTheDocument();
      expect(image30).toBeInTheDocument();
    });
  });
});