import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando a pagina pokedex', () => {
  test('Testando o heading', () => {
    renderWithRouter(<App />);

    const pokedexTitle = screen
      .getByRole('heading', { name: 'Encountered pokémons', level: 2 });

    expect(pokedexTitle).toBeInTheDocument();
  });

  // test('Testando o botão "Próximo pokémon', () => {
  //   renderWithRouter(<App />);

  //   const nextPokemonButton = screen.getByTestId('next-pokemon');

  //   expect(nextPokemonButton).toHaveTextContent('Próximo pokémon');

  // });

  test('Testando o nome dos botões de filtragem', () => {
    const pokemonTypes = [
      'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon',
    ];

    renderWithRouter(<App />);

    const pokemonTypesButtons = screen.getAllByTestId('pokemon-type-button');
    const pokemonTypesButtonsText = pokemonTypesButtons.map((type) => type.innerHTML);
    const MAGIC_NUMBER = 7;

    expect(pokemonTypesButtons).toHaveLength(MAGIC_NUMBER);
    expect(pokemonTypesButtonsText).toStrictEqual(pokemonTypes);
  });

  test('Testando o botão All', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton).toBeInTheDocument();

    userEvent.click(allButton);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
