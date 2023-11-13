// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  expect(screen.getByRole('heading', {level:2})).toHaveTextContent('Counter');
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByRole('button', {name: /-/i});
  fireEvent.click(decrement);
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
