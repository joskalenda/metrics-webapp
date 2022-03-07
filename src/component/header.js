import { Link, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiOutlineSetting as Settings, HiOutlineMicrophone } from 'react-icons/ai';
import logo from '../assets/logo.png';

const Header = () => {
  const Backdrop = <TiArrowBackOutline />;
  const location = useLocation();
  const Backpath = location.pathname.includes('country') || location.pathname.includes('continent') ? Backdrop : '';

  return (

    <nav>
      {/* header 1 */}
      <div>
        <img src={logo} alt="logo" className="logo" />
        <h1> 2022 Covid-Tracker</h1>
        <div>
          <HiOutlineMicrophone />
          <Settings />
        </div>
      </div>
      {/* header 2 */}
      <div>
        <Link to={{ pathname: '/' }}>{Backpath}</Link>
        <h1>Tracked Data</h1>
      </div>
    </nav>
  );
};

export default Header;
