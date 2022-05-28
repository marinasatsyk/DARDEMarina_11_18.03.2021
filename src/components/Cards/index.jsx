import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ajouter onclick sur cart et ouvrir la page description
function Cards({ data }) {
    console.log(data);
    let url = useLocation();
    console.log(url);
    return (
        <div className="cards">
            {data.map((d) => (
                <Link to={`${url.pathname}${d.id}`} key={d.id}>
                    <div key={d.id} className="card">
                        <h2>{d.title}</h2>
                        <img src={d.cover} alt={'image ' + d.title} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Cards;
