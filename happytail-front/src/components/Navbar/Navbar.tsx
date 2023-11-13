import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Navbar.scss'

import { BsFillPersonFill } from 'react-icons/bs'

interface NavbarProps {
  openLoginModal: () => void;
  isUserLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ openLoginModal, isUserLoggedIn }) => {
  return (
    <nav className='app__navbar'>
      <div className="logo w-[80px] h-[80px]">
        <img src={Logo} alt="" />
      </div>
      <ul className='flex-row flex'>
        <li>
          <a href="" className='text-l font-bold'>Adoção</a>
        </li>
        <li className='ml-5'>
          <a href="" className='text-l font-bold'>Doação</a>
        </li>
      </ul>
      {isUserLoggedIn ? (
        <Link to="/dashboard">
          <BsFillPersonFill size={30}/>
        </Link>
      ) : (
        <button className='app__navbar-button' onClick={openLoginModal}>
          Entrar
        </button>
      )}
    </nav>
  );
}

export default Navbar;
