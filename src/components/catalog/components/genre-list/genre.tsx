import React from 'react';

interface GenreProps {
  genre: string;
  isActive: boolean;
}
const GenreComponent: React.FC<GenreProps> = ({ genre, isActive }) => (
  <li
    className={`catalog__genres-item catalog__genres-item${
      isActive ? '--active' : ''
    }`}
  >
    <a href="#" className="catalog__genres-link">
      {genre}
    </a>
  </li>
);

export const Genre = React.memo(GenreComponent);
