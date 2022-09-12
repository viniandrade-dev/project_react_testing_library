import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando a página Favorite Pokemons', () => {
  test('Testando se a mensagem "No favorite pokemon found" aparece', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavorites = screen.getByText('No favorite pokemon found');
    expect(noFavorites).toBeInTheDocument();
  });
});
