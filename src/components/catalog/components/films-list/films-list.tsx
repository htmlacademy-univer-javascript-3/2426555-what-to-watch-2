import React, { useState } from 'react';
import { filmsInfo } from '../../../../mocs/films';
import { SmallFilmCard } from './small-film-card';
import { useAppSelector } from '../../../../hooks/store';

interface FilmsListComponentProps {
  maxLength?: number;
  genre?: string;
}

const FilmsListComponent: React.FC<FilmsListComponentProps> = ({
  maxLength = filmsInfo.length,
  genre,
}) => {
  const stateGenreFilms = useAppSelector((state) => state.genreFilms);
  const stateFilms = useAppSelector((state) => state.films);

  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleCardHover = (filmId: number) => {
    setActiveFilm(filmId);
  };

  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  const filteredFilms = genre
    ? stateFilms.filter((film) => film.genre === genre)
    : stateGenreFilms;

  return (
    <div className="catalog__films-list">
      {filteredFilms.slice(0, maxLength).map((film) => (
        <SmallFilmCard
          film={film}
          key={film.id}
          isActive={film.id === activeFilm}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        />
      ))}
    </div>
  );
};

export const FilmsList = React.memo(FilmsListComponent);
