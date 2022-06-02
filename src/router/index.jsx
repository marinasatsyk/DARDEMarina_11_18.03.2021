import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
    Navigate
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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

    return (
        <>
            <Router>
                <div id="wrapper_body">
                    <Header />

                    <div className="main">
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={
                                    <Home data={logements} loading={false} />
                                }
                            />

                            <Route path="/about" element={<About />} />

                            <Route
                                path="/logements/:id"
                                element={<Logement data={logements} />}
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
