import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Developer Community link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Developer Community/i);
  expect(linkElement).toBeInTheDocument();
});
