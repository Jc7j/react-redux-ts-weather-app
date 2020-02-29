import React from 'react';
import { weatherIconDisplay } from 'utils';

import 'styles/IconDisplay.css';

interface IconDisplayProps {
  icon: string;
  top: number;
  left?: number;
}

const IconDisplay = (props: IconDisplayProps) => {
  const { left, icon, top } = props;

  return (
    <img
      alt="Weather Icon"
      className="iconDisplayContainer"
      src={weatherIconDisplay(icon)}
      style={{ top: `${top}rem`, left: `${left}rem` }}
    />
  );
};

export default IconDisplay;
