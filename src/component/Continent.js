import React, { useEffect, useState } from 'react';
import {
  Link, useNavigate, useLocation, useParams,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegArrowAltCircleRight as CircleIcon } from 'react-icons/fa';
import FetchData from '../redux/Api';
import SetPagination from './SetPagination';
import { GetStates } from '../redux/Reducers';
import styles from '../styles/continent.module.scss';

const Continent = () => {
  const Countries = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { continent } = useParams();

  useEffect(() => {
    if (Countries.length === 0) {
      FetchData()
        .then((response) => dispatch(GetStates(response)));
    }
  }, []);

  let Continents = Countries.filter((item) => item.continent === continent);

  const totalPopulation = Continents.reduce((total, data) => ({
    population: total.population + data.population,
  }), { population: 0 });

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  Continents = Continents.filter((country) => country.country.toLowerCase().includes(search));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);
  const [page, setPage] = useState(0);

  const countryFilterOnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  const itemsPerPage = 12;

  const tenItems = Continents.slice(page * itemsPerPage, (page * itemsPerPage) + itemsPerPage);

  return (
    <div className={styles.continentContainer}>
      <div className={styles.headerContinent}>
        <h1>{continent}</h1>
        <h3>{totalPopulation.population.toLocaleString()}</h3>
      </div>
      <form className={styles.form}>
        <input type="text" value={searchValue} placeholder="Search for country..." onChange={countryFilterOnChange} />
      </form>
      <ul className={styles.ulcountries}>
        {
        tenItems.map((country) => (
          <Link key={country.country} to={{ pathname: `/country/${country.country}` }}>
            <li className={styles.licountries}>
              <p><CircleIcon /></p>
              <div>
                <h1 className={styles.countryName}>
                  {country.country}
                </h1>
                <p className={styles.totalpopulation}>
                  {country.population.toLocaleString()}
                </p>
              </div>
              <div className={styles.mapDivCountries}>
                <img src={country.country_flag} alt="flag" className="flag" />
              </div>
            </li>
          </Link>
        ))
      }
      </ul>
      <SetPagination
        countryPages={Continents.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Continent;
