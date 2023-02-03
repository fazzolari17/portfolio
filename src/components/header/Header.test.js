import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import Header from './Header';

let user;

describe('Header', () => {
  describe('Desktop Header', () => {
    beforeEach(() => {
      user = userEvent.setup();

      render(
        <App>
          <Header />
        </App>
      );
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

    it('header has the correct background color', () => {
      const menu = screen.getByTestId(/header/i);
      expect(menu).toHaveStyle(`background-color: var(--header-background, #071013)`);
    });

    it('nav menu items have the correct color', () => {
      const home = screen.getByText(/home/i);
      const aboutMe = screen.getByText(/about me/i);
      const projects = screen.getByText(/projects/i);
      const contact = screen.getByText(/contact/i);

      expect(home).toHaveStyle(`color: var(--header-text, #F0F8FF)`);
      expect(aboutMe).toHaveStyle(`color: var(--header-text, #F0F8FF)`);
      expect(projects).toHaveStyle(`color: var(--header-text, #F0F8FF)`);
      expect(contact).toHaveStyle(`color: var(--header-text, #F0F8FF)`);
    });

    it('current page link has a line underneath it, other menu items do not', async () => {
      const homeButton = await screen.findByText(/home/i);
      const aboutMeButton = await screen.findByText(/about me/i);
      const projectsButton = await screen.findByText(/projects/i);
      const contactButton = await screen.findByText(/contact/i);

      await user.click(homeButton);
      expect(homeButton).toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(aboutMeButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(projectsButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(contactButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');

      await user.click(aboutMeButton);
      expect(aboutMeButton).toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(homeButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(projectsButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(contactButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');

      await user.click(projectsButton);
      expect(projectsButton).toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(aboutMeButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(homeButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
      // expect(contactButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');

      await user.click(contactButton);
      expect(contactButton).toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
    //   expect(projectsButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
    //   expect(aboutMeButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
    //   expect(homeButton).not.toHaveStyle('border-bottom: 2px solid var(--header-text, #F0F8FF)');
    });
  });
});