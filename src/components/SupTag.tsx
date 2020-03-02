import React from 'react';
import { useSelector } from 'react-redux';

import { selectedCelciusSelector } from 'store/selection/selectors';

import 'styles/SupTag.css';

interface SupTagProps {
  oTagSize: number;
  oTagTopPos: number;
  tempLetterSize: number;
  tempLetterTopPos: number;
}

const SupTag = (props: SupTagProps) => {
  const { oTagSize, oTagTopPos, tempLetterSize, tempLetterTopPos } = props;

  const selectedCelcius = useSelector(selectedCelciusSelector);

  return (
    <span className="supTagContainer">
      <sup
        className="oTagStyle"
        style={{ fontSize: `${oTagSize}em`, top: `${oTagTopPos}em` }}
      >
        o
      </sup>
      <sup
        className="supTagTemp"
        style={{
          fontSize: `${tempLetterSize}rem`,
          top: `${tempLetterTopPos}rem`
        }}
      >
        {selectedCelcius ? 'C' : 'F'}
      </sup>
    </span>
  );
};

export default SupTag;
