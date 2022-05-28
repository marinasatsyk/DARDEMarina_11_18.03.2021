import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
