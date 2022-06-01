import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import About from '../../pages/About';
import Home from '../../pages/Home';
import Logo from '../../assets/LOGO_red.svg';
function Header() {
    return (
        <header>
            <div className="header">
                <img src={Logo} alt="logo KASA" />
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
