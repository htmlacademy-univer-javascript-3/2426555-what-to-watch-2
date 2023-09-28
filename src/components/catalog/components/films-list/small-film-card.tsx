import React from 'react';
import { FilmProps } from '../../../../data/filmsData';

interface SmallFilmCardProps {
  film: FilmProps;
}

const SmallFilmCardComponent: React.FC<SmallFilmCardProps> = ({ film }) => {
  const { title, imageSrc, alt, width, height, link } = film;


  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={link}>
          {title}
        </a>
      </h3>
    </article>
  );
};

export const SmallFilmCard = React.memo(SmallFilmCardComponent);

