import { format, getMonth } from 'date-fns';
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

  const days: { day: string }[] = [];
  let prev = 0;

  forecastList.map(list => {
    const { day } = getTimeOrDay(list.dt_txt);
    if (prev !== Number(day)) days.push({ day });
    prev = Number(day);
  });

  return (
    <>
      <ul>
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
                      return <li>{list.dt_txt}</li>;
                    }
                  })}
                </TabsPanel>
              </>
            );
          })}
        </Tabs>
      </ul>
    </>
  );
};

export default HourlyWeather;
