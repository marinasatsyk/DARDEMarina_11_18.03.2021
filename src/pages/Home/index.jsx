import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Cards from '../../components/Cards';
import database from '../../components/database';
import { StyledLink, Loader } from '../../utils/Atoms';
import Background from '../../assets/Background_home_D.png';
import BackgrounM from '../../assets/Background_home_m.png';
import BigImage from '../../components/BigImage';
// import { useMediaQuery } from 'react-responsive';

function Home({ data }, { loading }) {
    const title = 'Chez vous, partout et ailleurs';
    // const isMobile = useMediaQuery({ maxWidth: 736 });
    return (
        <div className="App">
            <BigImage imgPath={Background} text={title} />
            <div className="wrap_cards">
                {loading ? <p>Chargement ...</p> : <Cards data={data} />}
            </div>
        </div>
    );
}

export default Home;
