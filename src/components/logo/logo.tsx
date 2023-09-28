import React from 'react';

interface LogoProps {
  className?: string;
}

const LogoComponent: React.FC<LogoProps> = ({ className }) => (
  <div className="logo">
    <a className={`logo__link ${className ? className : ''}`}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  </div>
);

export const Logo = React.memo(LogoComponent);
