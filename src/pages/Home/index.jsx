import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Cards from '../../components/Cards';
import database from '../../components/database';
import { StyledLink, Loader } from '../../utils/Atoms';
import Background from '../../assets/Background_home_D.png';

function Home({ data }, { loading }) {
    return (
        <div className="App">
            <div className="wrapImage">
                <img className="cover" src={Background} alt="paysage" />
            </div>
            <div className="wrap_cards">
                {loading ? <p>Chargement ...</p> : <Cards data={data} />}
            </div>
        </div>
    );
}

export default Home;
