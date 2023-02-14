import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../../../header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  describe('Desktop Header', () => {
    beforeEach(() => {
      render(
        <Router>
          <Header />
        </Router>
      );
    });

    it('renders correctly', () => {
      const tree = renderer.create(
        <Router>
          <Header />
        </Router>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders and dispays menu', () => {
      const home = screen.getByText(/home/i);
      const aboutMe = screen.getByText(/about me/i);
      const projects = screen.getByText(/projects/i);
      const contact = screen.getByText(/contact/i);
      expect(home).toBeInTheDocument();
      expect(aboutMe).toBeInTheDocument();
      expect(projects).toBeInTheDocument();
      expect(contact).toBeInTheDocument();
    });

    it('renders the logo', () => {
      const logoG = screen.getByTestId('logoG');
      const logoF = screen.getByTestId('logoF');
      expect(logoG).toBeInTheDocument();
      expect(logoF).toBeInTheDocument();
    });

  });
});