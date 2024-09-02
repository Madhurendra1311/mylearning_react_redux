import { fetchCountries } from '../utils/api';
import { Country } from '../types/Country';

interface CountryProps {
  params: { country: string };
}

export default async function CountryPage({ params }: CountryProps) {
  const countries = await fetchCountries();
  const countryData = countries.find((c) => c.name.common === params.country);

  if (!countryData) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>{countryData.name.common}</h1>
      <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} />
      <p>Population: {countryData.population.toLocaleString()}</p>
      <p>Region: {countryData.region}</p>
      <p>Capital: {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
      <p>Timezones: {countryData.timezones.join(', ')}</p>
      <p>Currencies: {Object.values(countryData.currencies).map((cur) => cur.name).join(', ')}</p>
      <p>Languages: {Object.values(countryData.languages).join(', ')}</p>
    </div>
  );
}
