import React from 'react';
import { Logo } from '../logo';

const WIDTH = 63;
const HEIGHT = 63;

const HeaderComponent: React.FC = () => (
  <header className="page-header film-card__head">
    <Logo />

    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width={WIDTH}
            height={HEIGHT}
          />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  </header>
);

export const Header = React.memo(HeaderComponent);
