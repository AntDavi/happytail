import './Navbar.scss';
import Logo from '../../assets/logo.png'

const Navbar = ({ openLoginModal }) => {
    
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
            <button className='app__navbar-button' onClick={openLoginModal}>Entrar</button>
        </nav>
    )
}

export default Navbar