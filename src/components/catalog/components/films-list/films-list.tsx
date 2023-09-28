import React from 'react';
import { filmsData } from '../../../../data/filmsData';
import { SmallFilmCard } from './small-film-card';

const FilmsListComponent: React.FC = () => (
  <div className="catalog__films-list">
    {filmsData.map((film) => (
      <SmallFilmCard film={film} key={film.id} />
    ))}
  </div>
);

export const FilmsList = React.memo(FilmsListComponent);
