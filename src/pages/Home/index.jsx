import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Cards from '../../components/Cards';
import database from '../../components/database';
import { StyledLink, Loader } from '../../utils/Atoms';
import Background from '../../assets/Background_home_D.png';
import BigImage from '../../components/bigImage';

function Home({ data }, { loading }) {
    const title = 'Chez vous, partout et ailleurs';

    return (
        <div className="App">
            <BigImage imgPath={Background} text={title} />
            {/* <div className="wrapImage">
                <img className="cover" src={Background} alt="paysage" />
                <span className="slogan">Chez vous, partout et ailleurs</span>
            </div> */}
            <div className="wrap_cards">
                {loading ? <p>Chargement ...</p> : <Cards data={data} />}
            </div>
        </div>
    );
}

export default Home;
