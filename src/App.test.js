import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Linkedln link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Linkedln/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github/i);
  expect(linkElement).toBeInTheDocument();
});
