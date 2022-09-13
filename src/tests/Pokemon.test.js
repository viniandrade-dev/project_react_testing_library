import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando o componente Pokemon', () => {
  test('Testando as propriedades da imagem do pokemon', () => {
    renderWithRouter(<App />);

    const pokemonImgURL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const pokemonImg = screen.getByRole('img');

    expect(pokemonImg).toHaveAttribute('src', pokemonImgURL);
    expect(pokemonImg).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('Testando funcionalidade de favoritar que adiciona uma estrela ao pokemon', () => {
    renderWithRouter(<App />);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');

    const detailsLink = screen.getByText('More details');
    expect(detailsLink).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(detailsLink);

    const favoriteCheckbox = screen.getByText('Pokémon favoritado?');
    userEvent.click(favoriteCheckbox);

    const Images = screen.getAllByRole('img');
    const favoriteImage = Images[1];
    const favoriteImageSrc = '/star-icon.svg';

    expect(favoriteImage).toHaveAttribute('src', favoriteImageSrc);
    expect(favoriteImage).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
