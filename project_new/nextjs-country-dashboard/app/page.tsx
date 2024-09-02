import { useEffect, useState } from 'react';
import { fetchCountries } from './utils/api';
import { Country } from './types/Country';

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCountries() {
      setLoading(true);
      try {
        const data = await fetchCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        setError('Failed to load countries.');
      } finally {
        setLoading(false);
      }
    }

    loadCountries();
  }, []);

  // Apply sorting when countries or sortOrder changes
  useEffect(() => {
    const sortedCountries = [...filteredCountries].sort((a, b) =>
      sortOrder === 'asc' ? a.population - b.population : b.population - a.population
    );
    setFilteredCountries(sortedCountries);
  }, [sortOrder, filteredCountries]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(term.toLowerCase()) ||
        (country.capital && country.capital[0]?.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredCountries(filtered);
  };

  const handleFilterByRegion = (region: string) => {
    setRegionFilter(region);
    const filtered = countries.filter((country) => country.region === region);
    setFilteredCountries(filtered);
  };

  const handleSortByPopulation = (order: 'asc' | 'desc') => {
    setSortOrder(order);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Country Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name or capital"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select onChange={(e) => handleFilterByRegion(e.target.value)} value={regionFilter}>
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <button onClick={() => handleSortByPopulation('asc')}>Sort by Population Asc</button>
        <button onClick={() => handleSortByPopulation('desc')}>Sort by Population Desc</button>
      </div>
      <div className="grid">
        {filteredCountries.map((country) => (
          <div key={country.name.common} className="card">
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
