import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ajouter onclick sur cart et ouvrir la page description
function Card({ data }) {
    let url = useLocation();
    return (
        <Link
            to={`${url.pathname}logements/${data.id}`}
            className="card thumbs"
        >
            <img src={data.cover} alt={'image ' + data.title} />
            <h2>{data.title}</h2>
        </Link>
    );
}

export default Card;
