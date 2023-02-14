import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AboutMe from '../../../aboutMe/AboutMe';
import renderer from 'react-test-renderer';

describe('about me page', () => {
  describe('snapshot', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<AboutMe />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
  describe('aboutMe', () => {
    it('renders the page', () => {
      const { getByText } = render(<AboutMe />);

      const name = getByText(/Giuseppe fazzolari/i);
      expect(name).toBeInTheDocument();
    });
  });
});