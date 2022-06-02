import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home';

function Error({ codeError, data }) {
    return (
        <div className="error_page">
            <h2>{codeError}</h2>
            {codeError === '404' && (
                <p>Oups! La page que vous avez demandé n'existe pas.</p>
            )}
            {codeError === '200' && <p>C'est quoi ce code ?</p>}

            <Link to="/">
                <div className="retour"> Retourner sur la page d'accueil</div>
            </Link>
        </div>
    );
}

export default Error;
