import React from 'react';

import TodaysForecast from 'components/TodaysForecast';

import 'styles/Today.css';

const Today = () => {
  return (
    <div className="todayContainer">
      <div className="todayInnerContainer">
        <div className="todayHeader">
          <strong>Welcome</strong>
        </div>
        <TodaysForecast />
        <div className="todayFooter">Bye</div>
      </div>
    </div>
  );
};

export default Today;
