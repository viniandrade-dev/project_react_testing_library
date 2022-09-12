import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando componente About', () => {
  test('Testando se a página cotém um heading h2 com texto About Pokédex', () => {
    renderWithRouter(<About />);
    const pokedexHeading = screen
      .getByRole('heading', { name: 'About Pokédex', level: 2 });

    expect(pokedexHeading).toBeInTheDocument();
    expect(pokedexHeading).toHaveTextContent('About Pokédex');
  });

  test('Testando se a página contém a imagem correta', () => {
    renderWithRouter(<About />);
    const pokedexImg = screen.getByRole('img');
    const imgURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(pokedexImg).toBeInTheDocument();
    expect(pokedexImg).toHaveAttribute('src', imgURL);
  });
});
