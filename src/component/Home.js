import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const AllContinents = useSelector((state) => state.continent);

  return (

    <div id={AllContinents}>
      <h1> Real time information (24H / 24) </h1>
      <ul>
        {
      AllContinents.map((continent) => (
        <Link key={continent.name} to={{ pathname: `/continent/${continent.name}` }}>
          <li>
            <div>
              <h1>{continent.name}</h1>
              <h2>
                {continent.number}
                {' '}
                countries
              </h2>
            </div>
            <div>
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
