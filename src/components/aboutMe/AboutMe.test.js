import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('about me page', () => {
  describe('aboutMe', () => {
    it('renders the page', () => {
      const { getByText } = render(<AboutMe />);

      const name = getByText(/Giuseppe fazzolari/i);
      expect(name).toBeInTheDocument();
    });
  });
});