import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import database from '../components/database';
import Logement from '../pages/Fiche_Logement';

function RouterF() {
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function loadLogements() {
            setLoading(true);
            database(setLogements, () => {
                setLoading(false);
            });
        }
        loadLogements();
    }, []);
    let url = useLocation();
    const cardElem = logements.map((d) => d.id.find((elem) => elem === url));

    return (
        <>
            <Router>
                <div id="wrapper_body">
                    <Header />
                    <div className="main">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Home data={logements} loading={false} />
                                }
                            />
                            <Route path="/about" element={<About />} />
                            {cardElem} ?{' '}
                            <Routes
                                path={`/${cardElem}`}
                                element={<Logement />}
                            />
                            <Route
                                path="*"
                                element={<Error codeError="404" />}
                            />
                        </Routes>
                    </div>

                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default RouterF;
