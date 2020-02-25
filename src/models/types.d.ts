declare module 'MyModels' {
  export type Selections = {
    selectedCountry: {
      countryId: string;
      countryName: string;
    };
    selectedState: {
      stateId: string;
      stateName: string;
    };
    selectedCity: {
      cityId: string;
      cityName: string;
    };
  };
}
