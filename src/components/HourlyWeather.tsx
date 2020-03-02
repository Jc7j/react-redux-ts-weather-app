import { format, getMonth, getDate } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTimeOrDay, getHour } from 'utils';

import { forecastListSelector } from 'store/forecast/selectors';

import Tab from './Tab';
import Tabs from './Tabs';
import TabsPanel from './TabsPanel';

import 'styles/HourlyWeather.css';
import TempConditional from './TempConditional';
import SupTag from './SupTag';
import IconDisplay from './IconDisplay';

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
    <div className="hourlyWeatherContainer">
      <Tabs>
        <div className="tabContainer">
          {days.map(day => {
            const numDay = Number(day.day);
            const stringDay = day.day;

            return (
              <Tab label={stringDay} key={numDay}>
                {format(new Date(0, currentMonth, numDay), 'MMM do')}
              </Tab>
            );
          })}
        </div>
        <div className="listContainer">
          {days.map(day => {
            const numDay = Number(day.day);
            const stringDay = day.day;

            return (
              <TabsPanel label={stringDay} key={numDay}>
                {forecastList.map(list => {
                  const { day, hour } = getTimeOrDay(list.dt_txt);

                  if (day === stringDay) {
                    return (
                      <li className="listStyles">
                        <p>{getHour(Number(hour))}</p>
                        <p>Humidity: {list.main.humidity}%</p>
                        <IconDisplay
                          icon={list.weather[0].icon}
                          top={1}
                          height={3}
                        />
                        <p>{list.weather[0].description}</p>
                        <p>
                          <TempConditional
                            temperature={list.main.temp}
                            toFixed={0}
                          />
                          <SupTag
                            oTagSize={0.7}
                            oTagTopPos={-0.3}
                            tempLetterSize={0.8}
                            tempLetterTopPos={0}
                          />
                        </p>
                      </li>
                    );
                  }
                })}
              </TabsPanel>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default HourlyWeather;
