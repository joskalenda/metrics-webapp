import { Link, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiOutlineSetting as Settings } from 'react-icons/ai';
import { FaMicrophone as Mic } from 'react-icons/fa';
import styles from '../styles/Header.module.scss';
import logo from '../assets/logo.png';

const Header = () => {
  const Backdrop = <TiArrowBackOutline />;
  const location = useLocation();
  const Backpath = location.pathname.includes('country') || location.pathname.includes('continent') ? Backdrop : '';

  return (

    <nav className={styles.navBar}>
      <span>
        <img src={logo} alt="logo" className="logo" />
        <h1> 2022 Covid-Tracker</h1>
        <div>
          <Mic />
          <Settings />
        </div>
      </span>
      <div className={styles.nav2}>
        <Link to={{ pathname: '/' }}>{Backpath}</Link>
        <h1>Tracked Data</h1>
      </div>
    </nav>
  );
};

export default Header;
