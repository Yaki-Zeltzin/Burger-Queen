import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import submit from './components/form/Login';
import Login from './components/form/Login';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
describe('Submit', () => {
  it('Enter to the system and validate the user roles`', () => {

    const entrada = {
      email: "anita.borg@systers.xyz ",
      password: "123456"
    };
    const salida = 200;


    return submit(entrada).then(data.status)
  });

});
*/