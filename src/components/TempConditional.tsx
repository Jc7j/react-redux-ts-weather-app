import React from 'react';
import { useSelector } from 'react-redux';
import { kelvinToCelcius, kelvinToFahrenheit } from 'utils';

import { selectedCelciusSelector } from 'store/selection/selectors';

interface TempConditionalProps {
  temperature: number;
  toFixed: number;
}

const TempConditional = (props: TempConditionalProps) => {
  const { temperature, toFixed } = props;

  const selectedCelcius = useSelector(selectedCelciusSelector);

  return (
    <>
      {selectedCelcius
        ? kelvinToCelcius(temperature, toFixed)
        : kelvinToFahrenheit(temperature, toFixed)}
    </>
  );
};

export default TempConditional;
