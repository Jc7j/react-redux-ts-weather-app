import { format, getMonth, getDate } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTimeOrDay } from 'utils';

import { forecastListSelector } from 'store/forecast/selectors';

import Tab from './Tab';
import Tabs from './Tabs';
import TabsPanel from './TabsPanel';

import 'styles/HourlyWeather.css';

const HourlyWeather = () => {
  const forecastList = useSelector(forecastListSelector);
  const currentMonth = getMonth(new Date());

  if (forecastList.length <= 0 || forecastList.length === undefined)
    return null;

  /**
   * Put the days into an array objects
   */
  const days: { day: string }[] = [];
  let prev = 0;
  forecastList.map(list => {
    const { day } = getTimeOrDay(list.dt_txt);
    if (prev !== Number(day) && Number(day) !== getDate(new Date()))
      days.push({ day });
    prev = Number(day);
  });

  return (
    <>
      <Tabs>
        {days.map(day => {
          const numDay = Number(day.day);
          const stringDay = day.day;

          return (
            <>
              <Tab label={stringDay} key={numDay}>
                {format(new Date(0, currentMonth, numDay), 'MMM do')}
              </Tab>

              <TabsPanel label={stringDay} key={numDay}>
                {forecastList.map(list => {
                  const { day } = getTimeOrDay(list.dt_txt);

                  if (day === stringDay) {
                    return list.dt_txt;
                  }
                })}
              </TabsPanel>
            </>
          );
        })}
      </Tabs>
    </>
  );
};

export default HourlyWeather;
