import React from 'react';

import TodaysForecast from 'components/TodaysForecast';

import 'styles/TodayPage.css';

const TodayPage = () => {
  return (
    <div className="todayContainer">
      <div className="todayInnerContainer">
        <div className="todayHeader">Today</div>
        <TodaysForecast />
        <div className="todayFooter">Bye</div>
      </div>
    </div>
  );
};

export default TodayPage;
