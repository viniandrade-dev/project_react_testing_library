import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando a página PokemonDetails', () => {
  test('testando ', () => {
    renderWithRouter(<App />);

    const locationImageSrc1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const locatioImagesSrc2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    const locatioImagesSrc = [locationImageSrc1, locatioImagesSrc2];

    const detailsBtn = screen.getByText('More details');
    userEvent.click(detailsBtn);

    const pikachuDetails = screen
      .getByRole('heading', { name: 'Pikachu Details', level: 2 });
    const summary = screen.getByRole('heading', { name: 'Summary', level: 2 });
    const summaryText = screen.getByText(/intelligent pokémon/i);
    const gameLocation = screen
      .getByRole('heading', { name: 'Game Locations of Pikachu', level: 2 });
    const locationImages = screen.getAllByAltText('Pikachu location');
    const favoriteCheckbox = screen.getByLabelText('Pokémon favoritado?');

    expect(pikachuDetails).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
    expect(gameLocation).toBeInTheDocument();
    locationImages.forEach((image, index) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', locatioImagesSrc[index]);
    });
    expect(favoriteCheckbox).toBeInTheDocument();
  });
});
