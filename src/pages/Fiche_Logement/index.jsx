import { useLocation, useParams } from 'react-router-dom';
import React from 'react';
import RatingScale from '../../utils/ratingScale';

function Logement({ data }) {
    let { id } = useParams();
    let param = { id }.id;
    const house = data.find((elem) => elem.id === param);
    const tags = house.tags;

    return (
        <div className="fiche_house">
            <img src={`${house.cover}`} alt="" />
            <article>
                <div className="left_side">
                    <h1>{house.title}</h1>
                    <div className="location">{house.location}</div>
                    <div className="tags">
                        <ul>
                            {tags.map((tag) => (
                                <li className="tag" key={tag}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right_side">
                    <div className="name_host">{house.host.name}</div>
                    <img
                        src={`${house.host.picture}`}
                        alt={`${house.host.name}`}
                    />
                    <div className="wrapper_rating">
                        {<RatingScale scaleValue={house.rating} />}
                    </div>
                </div>
                <div className="description_wrap">
                    <div className="description_body">{house.description}</div>
                </div>
                <div className="equipments_wrap">
                    <div className="equipments_body">{house.equipments}</div>
                </div>
            </article>
        </div>
    );
}

export default Logement;
