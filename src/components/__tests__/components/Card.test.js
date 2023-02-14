import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../Card';

describe('Card Component', () => {
  describe('Snapshot', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Card />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('card component unit tests', () => {
    beforeEach(() => {
      render(
        <Card className={'test-class'} style={{ background: 'red' }}>
          <p>Child Component</p>
        </Card>
      );
    });
    it('renders children', () => {
      const childComponent = screen.getByText(/child component/i);
      expect(childComponent).toBeInTheDocument();
    });

    it('passes the className through to component', () => {
      const childComponent = screen.getByText(/child component/i);
      expect(childComponent.parentElement).toHaveClass('test-class');
    });

    it('passes the style attributes through to component', () => {
      const childComponent = screen.getByText(/child component/i);
      expect(childComponent.parentElement).toHaveStyle('background: red');
    });

  });
});