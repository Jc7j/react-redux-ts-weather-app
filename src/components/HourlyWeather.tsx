import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTimeOrDay, getHour } from 'utils';

import { forecastListSelector } from 'store/forecast/selectors';

import Tab from './Tab';

import 'styles/HourlyWeather.css';

const HourlyWeather = () => {
  // const [selectedDay, setSelectedDay] = useState(0);

  const forecastList = useSelector(forecastListSelector);

  if (forecastList.length <= 0 || forecastList.length === undefined)
    return null;
  const { dt_txt } = forecastList[0];

  const days: { day: string }[] = [];
  //   let index = 0;
  let prev = 0;
  forecastList.map(list => {
    const { day } = getTimeOrDay(list.dt_txt);
    if (prev !== Number(day)) days.push({ day });
    prev = Number(day);
  });

  const { hour } = getTimeOrDay(dt_txt);

  console.log(days);

  return (
    <>
      <ul>
        {/* {days.map(day => (
          <>
            <Tab key={Number(day.day)} label={day.day}>
              {day.day}
            </Tab>
          </>
        ))} */}
      </ul>
    </>
  );
};

export default HourlyWeather;
