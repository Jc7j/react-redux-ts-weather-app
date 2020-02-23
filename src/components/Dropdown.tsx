import React, { memo, useEffect, useState } from "react";
import Select from "react-select";
import csc from "country-state-city";

const Dropdown = () => {
  const [countries, setCountries] = useState([{ value: "", label: "" }]);

  useEffect(() => {
    try {
      const allCountries = csc.getAllCountries();
      const options: any = [];
      allCountries.map(country =>
        options.push({
          value: country.sortname,
          label: country.name
        })
      );

      setCountries(options);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <Select options={countries} placeholder={"Select Country"} />
    </div>
  );
};

export default memo(Dropdown);
