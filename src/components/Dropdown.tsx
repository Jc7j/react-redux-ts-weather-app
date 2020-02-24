import csc from "country-state-city";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select, { ValueType } from "react-select";
import {
  selectedCity,
  selectedCountry,
  selectedState
} from "../store/selection/actions";
import "../styles/Dropdown.css";

interface DropdownProps {
  countryId: string;
  stateId: string;
}
type SelectOptions = {
  value: string;
  label: string;
};

const INITAL_STATE: SelectOptions = {
  value: "",
  label: "Select a Country"
};

const Dropdown = (props: DropdownProps) => {
  const { countryId, stateId } = props;

  const [countries, setCountries] = useState([{ ...INITAL_STATE, label: "" }]);
  const [selectedCountryOption] = useState(INITAL_STATE);
  const [selectedStateOption] = useState({
    ...INITAL_STATE,
    label: "Select a State"
  });
  const [selectedCityOption] = useState({
    ...INITAL_STATE,
    label: "Select a City"
  });

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const allCountries = csc.getAllCountries();
      const options: SelectOptions[] = [];
      allCountries.map(country =>
        options.push({
          value: country.id,
          label: country.name
        })
      );

      setCountries(options);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStatesOfCountry = () => {
    const allStatesOfCountry = csc.getStatesOfCountry(countryId);
    const options: SelectOptions[] = [];

    allStatesOfCountry.map(state =>
      options.push({
        value: state.id,
        label: state.name
      })
    );

    return options;
  };

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

  const handleSelectOnChange = (
    selectedOption: ValueType<SelectOptions>,
    id?: string
  ) => {
    const { value, label } = selectedOption as SelectOptions;
    if (id === "country") dispatch(selectedCountry(value, label));
    if (id === "state") dispatch(selectedState(value, label));
    if (id === "city") dispatch(selectedCity(value, label));
  };

  return (
    <div className="drowndownContainer">
      <Select
        className="selectStyles"
        placeholder={selectedCountryOption.label}
        onChange={selectedOption =>
          handleSelectOnChange(selectedOption, "country")
        }
        options={countries}
        type="search"
      />
      <Select
        className="selectStyles"
        placeholder={selectedStateOption.label}
        onChange={selectedOption =>
          handleSelectOnChange(selectedOption, "state")
        }
        options={getStatesOfCountry()}
        type="search"
      />
      <Select
        className="selectStyles"
        placeholder={selectedCityOption.label}
        onChange={selectedOption =>
          handleSelectOnChange(selectedOption, "city")
        }
        options={getCitiesOfState()}
        type="search"
      />
    </div>
  );
};

export default memo(Dropdown);
