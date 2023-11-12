import './Navbar.scss';
import Logo from '../../assets/logo.png'
import profileIcon from '../../assets/icon.png'

const Navbar = ({ openLoginModal, isUserLoggedIn }) => {
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
          <img src={profileIcon} alt="Profile" className="logo w-[30px] h-[30px]" />
        ) : (
          <button className='app__navbar-button' onClick={openLoginModal}>
            Entrar
          </button>
        )}
      </nav>
    );
  }
  
  export default Navbar;