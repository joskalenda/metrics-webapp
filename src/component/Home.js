import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const AllContinents = useSelector((state) => state.continent);

  return (

    <div className={styles.HomeContainer} id={AllContinents}>
      <ul className={styles.ulcontinent}>
        {
      AllContinents.map((continent) => (
        <Link key={continent.name} to={{ pathname: `/continent/${continent.name}` }}>
          <li className={styles.licontinent}>
            <div>
              <h2 className={styles.continentName}>{continent.name}</h2>
              <h2 className={styles.countryNumber}>
                {continent.number}
                {' '}
                countries
              </h2>
            </div>
            <div className={styles.mapDiv}>
              <img src={continent.map} alt="Continent map" className={`map ${continent.classname}`} />
            </div>
          </li>
        </Link>
      ))
    }
      </ul>
    </div>
  );
};

export default Home;
