import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
  // describe('Snapshot', () => {
  //   it('renders correctly', () => {
  //     const tree = renderer.create(
  //       <App />
  //     ).toJSON();

  //     expect(tree).toMatchSnapshot();
  //   });
  // });
  describe('Main', () => {
    beforeEach(() => {
      render(<App />);
    });

    it('renders the page and dispays menu', () => {
      const home = screen.getByText(/home/i);
      const aboutMe = screen.getByText(/about me/i);
      const projects = screen.getByText(/projects/i);
      const contact = screen.getByText(/contact/i);
      expect(home).toBeInTheDocument();
      expect(aboutMe).toBeInTheDocument();
      expect(projects).toBeInTheDocument();
      expect(contact).toBeInTheDocument();
    });

    it('renders the page and dispays footer with correct icons', () => {
      const footerText = screen.getByText(/designed & created by: giuseppe fazzolari/i);
      const githubIcon = screen.getByLabelText('github link');
      const linkedInIcon = screen.getByLabelText(/linkedin link/i);
      const emailIcon = screen.getByLabelText(/email link/i);

      expect(footerText).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
      expect(linkedInIcon).toBeInTheDocument();
      expect(emailIcon).toBeInTheDocument();
    });

  });
});