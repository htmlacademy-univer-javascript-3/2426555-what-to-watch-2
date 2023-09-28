import React from 'react';
import { GenreList } from './components/genre-list';
import { FilmsList } from './components/films-list';

const CatalogComponent: React.FC = () => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenreList />

    <FilmsList />

    <div className="catalog__more">
      <button className="catalog__button" type="button">
        Show more
      </button>
    </div>
  </section>
);

export const Catalog = React.memo(CatalogComponent);
