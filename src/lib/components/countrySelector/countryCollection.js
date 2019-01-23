import { getNames } from 'country-list';

const mainCountryNames = ['Australia', 'South Africa', 'Uganda'];

const countryCollection = () => {
  const countryNames = getNames().filter(c => mainCountryNames.indexOf(c) === -1);

  return [].concat(
    mainCountryNames.map(n => ({ text: n })),
    { text: '......', disabled: true },
    countryNames.map(n => ({ text: n })),
  );
};

export default countryCollection;
