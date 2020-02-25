declare module 'MyModels' {
  export type Selections = {
    countryCode: string;
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
