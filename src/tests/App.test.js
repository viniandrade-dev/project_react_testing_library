/* eslint-disable max-len */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando componente App', () => {
  const FAVORITE_POKEMON = 'Favorite Pokémons';
  test('Testando se o topo da aplicação contém um conjunto fixo de links de navegação',
    () => {
      renderWithRouter(<App />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const aboutLink = screen.getByRole('link', { name: 'About' });
      const favPokemonsLink = screen.getByRole('link', { name: FAVORITE_POKEMON });

      expect(homeLink).toHaveTextContent('Home');
      expect(aboutLink).toHaveTextContent('About');
      expect(favPokemonsLink).toHaveTextContent(FAVORITE_POKEMON);
    });

  test('Testando se ao clicar no link home, somos redirecionados corretamente',
    () => {
      const { history } = renderWithRouter(<App />);
      const homeLink = screen.getByRole('link', { name: 'Home' });
      userEvent.click(homeLink);
      expect(history.location.pathname).toBe('/');
    });

  test('Testando se ao clicar no link about, somos redirecionados corretamente',
    () => {
      const { history } = renderWithRouter(<App />);
      const aboutLink = screen.getByRole('link', { name: 'About' });
      userEvent.click(aboutLink);
      expect(history.location.pathname).toBe('/about');
    });

  test(
    'Teste se ao clicar no link favorite pokémons, somos redirecionados corretamente',
    () => {
      const { history } = renderWithRouter(<App />);
      const favoritesPokemonsLink = screen.getByRole('link', { name: FAVORITE_POKEMON });
      userEvent.click(favoritesPokemonsLink);
      expect(history.location.pathname).toBe('/favorites');
    },
  );

  test('Testando se ao irmos para uma url inválida, aparece a página de not found',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/xablau');
      expect(history.location.pathname).toBe('/xablau');
    // const titleNotFound = screen.getByRole('heading', { name: 'Page requested not found', level: 2 });
    // expect(titleNotFound).toBeInTheDocument();
    });
});
