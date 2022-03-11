import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FetchData from '../redux/Api';
import { GetStates } from '../redux/Reducers';
import styles from '../styles/continent.module.scss';

const Country = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = CountryStore.find((country) => country.country === name);

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchData()
        .then((response) => dispatch(GetStates(response)));
    }
  });

  if (!findCountry) return <h1>Loading...</h1>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.countryDetails}>
        <h1>{name}</h1>
        <img src={findCountry.country_flag} alt="flag" className={styles.flag2} />
        <h2>{findCountry.population.toLocaleString()}</h2>
      </div>
      <div>
        <ul className={styles.uldetails}>
          <h3>Today&apos;s update:</h3>
          <li className={styles.lidetails}>
            <h4>New cases:</h4>
            <p>{findCountry.todays_cases.toLocaleString()}</p>
          </li>
          <li className={styles.lidetails}>
            <h4>Confirmed deaths:</h4>
            <p>{findCountry.todays_deaths.toLocaleString()}</p>
          </li>
          <li className={styles.lidetails}>
            <h4>New Recoveries:</h4>
            <p>{findCountry.todays_recovered.toLocaleString()}</p>
          </li>
        </ul>
        <ul className={styles.ultotal}>
          <h3>Total:</h3>
          <li className={styles.litotal}>
            <h4>Confirmed cases:</h4>
            <p>{findCountry.total_cases.toLocaleString()}</p>
          </li>
          <li className={styles.litotal}>
            <h4>Recovered:</h4>
            <p>{findCountry.total_recovered.toLocaleString()}</p>
          </li>
          <li className={styles.litotal}>
            <h4>Active Cases:</h4>
            <p>{findCountry.total_active.toLocaleString()}</p>
          </li>
          <li className={styles.litotal}>
            <h4>Total Tests:</h4>
            <p>{findCountry.total_tests.toLocaleString()}</p>
          </li>
          <li className={styles.litotal}>
            <h4>Deaths:</h4>
            <p>{findCountry.total_deaths.toLocaleString()}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
