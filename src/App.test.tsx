import React from 'react';
import { render, screen } from '@testing-library/react';
import MultipleInput from './MultipleInput';

test('renders learn react link', () => {
  render(<MultipleInput />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
