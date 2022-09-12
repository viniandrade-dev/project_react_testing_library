import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando a página Not Found', () => {
  test('Testando se possui o heading correto', () => {
    renderWithRouter(<NotFound />);

    const notFoundTitle = screen
      .getByRole('heading', { name: 'Page requested not found Crying emoji', level: 2 });

    expect(notFoundTitle).toBeInTheDocument();
  });

  test('Testando se pe renderizado a imagem correta', () => {
    renderWithRouter(<NotFound />);

    const cryingPikachuGif = screen.getAllByRole('img')[1];
    const cryingPikachuGifURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(cryingPikachuGif).toBeInTheDocument();
    expect(cryingPikachuGif).toHaveAttribute('src', cryingPikachuGifURL);
  });
});
