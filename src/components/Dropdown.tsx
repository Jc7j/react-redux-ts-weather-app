import csc from 'country-state-city';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { ValueType } from 'react-select';

import { addingForecast } from 'store/forecast/actions';
import {
  selectedCity,
  selectedCountry,
  selectedCountryCode,
  selectedState
} from 'store/selection/actions';
import {
  selectedCountryCodeSelector,
  selectedCitySelector
} from 'store/selection/selectors';

import { useWeatherApi } from 'api/request';

import 'styles/Dropdown.css';

interface DropdownProps {
  countryId: string;
  stateId: string;
}
type SelectOptions = {
  value: string;
  label: string;
};

const INITIAL_STATE: SelectOptions = {
  value: '',
  label: 'Select a Country'
};

const Dropdown = (props: DropdownProps) => {
  const { countryId, stateId } = props;
  const dispatch = useDispatch();

  const countryCode = useSelector(selectedCountryCodeSelector);
  const city = useSelector(selectedCitySelector);

  const [countries, setCountries] = useState([{ ...INITIAL_STATE, label: '' }]);
  const [states, setStates] = useState([{ ...INITIAL_STATE }]);

  const [selectedCountryOption] = useState(INITIAL_STATE);
  const [selectedStateOption] = useState({
    ...INITIAL_STATE,
    label: 'Select a State'
  });
  const [selectedCityOption] = useState({
    ...INITIAL_STATE,
    label: 'Select a City'
  });

  /**
   * Initially set the country and state options on mount.
   */
  useEffect(() => {
    try {
      const allCountries = csc.getAllCountries();
      const countryOptions: SelectOptions[] = [];

      const allStatesOfCountry = csc.getStatesOfCountry(countryId);
      const stateOptions: SelectOptions[] = [];

      allCountries.map(country =>
        countryOptions.push({
          value: country.id,
          label: country.name
        })
      );

      allStatesOfCountry.map(state =>
        stateOptions.push({
          value: state.id,
          label: state.name
        })
      );

      setCountries(countryOptions);
      setStates(stateOptions);
    } catch (e) {
      console.log(e);
    }
  }, [countryId]);

  /**
   * To grab all the cities after setting the state
   */
  const getCitiesOfState = () => {
    const allCitiesOfState = csc.getCitiesOfState(stateId);
    const options: SelectOptions[] = [];

    allCitiesOfState.map(city =>
      options.push({
        value: city.id,
        label: city.name
      })
    );

    return options;
  };

  /**
   * This is to handle the onClick for the button
   */
  const [{ data }] = useWeatherApi(
    city.cityName.replace(' ', '%20'),
    countryCode
  );
  const onClickHandler = () => {
    dispatch(addingForecast(data));
  };

  /**
   * After selecting country, state or city, it'll dispatch the value and label.
   * Country gets the code and dispatches the value, label and code.
   */
  const handleSelectOnChange = (
    selectedOption: ValueType<SelectOptions>,
    id?: string
  ) => {
    const { value, label } = selectedOption as SelectOptions;
    if (id === 'country') {
      const allCountries = csc.getAllCountries();
      const countryCode = allCountries
        .map(country => {
          if (country.name === label) {
            return country.sortname;
          }
        })
        .join('');
      dispatch(selectedCountryCode(countryCode));
      dispatch(selectedCountry(value, label));
    }
    if (id === 'state') dispatch(selectedState(value, label));
    if (id === 'city') dispatch(selectedCity(value, label));
  };

  return (
    <div className="drowndownContainer">
      <Select
        defaultValue={{ value: '231', label: 'United States' }}
        className="selectStyles"
        placeholder={selectedCountryOption.label}
        onChange={selectedOption =>
          handleSelectOnChange(selectedOption, 'country')
        }
        options={countries}
        type="search"
      />
      <Select
        autoFocus
        className="selectStyles"
        placeholder={selectedStateOption.label}
        onChange={selectedOption =>
          handleSelectOnChange(selectedOption, 'state')
        }
        options={states}
        type="search"
      />
      <Select
        className="selectStyles"
        placeholder={selectedCityOption.label}
        onChange={selectedOption =>
          handleSelectOnChange(selectedOption, 'city')
        }
        options={getCitiesOfState()}
        type="search"
      />
      <button className="dropdownButton" onClick={onClickHandler}>
        Check
      </button>
    </div>
  );
};

export default memo(Dropdown);
