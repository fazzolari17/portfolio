import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../Button';
import renderer  from 'react-test-renderer';

const mockFn = jest.fn();

describe('button', () => {
  beforeEach(() => {
    render(<Button
      href={'www.testHref.com'}
      buttonName={'test button'}
      handleClick={mockFn}
      invert={false} />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Button href={'www.testHref.com'}
      buttonName={'test button'}
      handleClick={mockFn}
      invert={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the button with correct href', () => {
    const button = screen.getByRole('link');

    expect(button).toHaveProperty('href', 'http://localhost/www.testHref.com');
  });


  it('renders the button with correct name', () => {
    const buttonName = screen.getByText(/test button/i);

    expect(buttonName).toBeInTheDocument();
  });


  it('calls the function when clicked', () => {
    const button = screen.getByRole(/link/);

    fireEvent.click(button);
    expect(mockFn.mock.calls).toHaveLength(1);

    fireEvent.click(button);
    expect(mockFn.mock.calls).toHaveLength(2);
  });

});