import React from 'react';
import { weatherIconDisplay } from 'utils';

import 'styles/IconDisplay.css';

interface IconDisplayProps {
  icon: string;
  top: number;
}

const IconDisplay = (props: IconDisplayProps) => {
  const { icon, top } = props;

  return (
    <img
      alt="Weather Icon"
      className="iconDisplayContainer"
      src={weatherIconDisplay(icon)}
      style={{ top: `${top}rem` }}
    />
  );
};

export default IconDisplay;
