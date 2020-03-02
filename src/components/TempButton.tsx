import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { celciusSelected } from 'store/selection/actions';
import { selectedCelciusSelector } from 'store/selection/selectors';

import 'styles/TempButton.css';

const TempButton = () => {
  const selectedCelcius = useSelector(selectedCelciusSelector);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(celciusSelected());
  };

  return (
    <button className="tempButtonContainer" onClick={onClickHandler}>
      {selectedCelcius ? 'Fahrenheit' : 'Celcius'}
    </button>
  );
};

export default TempButton;
