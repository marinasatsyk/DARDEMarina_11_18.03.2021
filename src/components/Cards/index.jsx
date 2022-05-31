import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from '../Card';

// ajouter onclick sur cart et ouvrir la page description
function Cards({ data }) {
    console.log(data);
    let url = useLocation();
    console.log(url);
    return (
        <section className="cards">
            {data.map((d) => (
                <Card data={d} key={d.id} />
            ))}
        </section>
    );
}

export default Cards;
