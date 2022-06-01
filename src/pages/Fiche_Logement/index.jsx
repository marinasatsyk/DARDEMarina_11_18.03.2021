import { useLocation, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import RatingScale from '../../utils/ratingScale';
import Carousel from '../../components/Carousel';
import Tag from '../../components/Tag';
import Dropdown from '../../components/Dropdown';
function Logement({ data }) {
    let { id } = useParams();
    let param = { id }.id;
    const house =
        data.length > 0
            ? data.find((elem) => elem.id === param)
            : {
                  name: '',
                  tags: [],
                  pictures: [],
                  title: '',
                  location: '',
                  host: { name: '' },
              };

    const tags = house.tags;

    return (
        <div className="logement">
            <div className="carousel">
                <Carousel photos={house.pictures} />
            </div>

            <article>
                <div className="wrapper_title">
                    <div className="left_side">
                        <h1>{house.title}</h1>
                        <div className="location">{house.location}</div>

                        <Tag tags={tags} classTag={'tag_display'} />
                    </div>
                    <div className="right_side">
                        <div className="host">
                            <div className="name_host">{house.host.name}</div>
                            <div className="wrapper_img_host">
                                <img
                                    src={`${house.host.picture}`}
                                    alt={`${house.host.name}`}
                                />
                            </div>
                        </div>
                        <div className="wrapper_rating">
                            <RatingScale scaleValue={house.rating} />
                        </div>
                    </div>
                </div>
                <div className="wrapper_content_house">
                    <Dropdown
                        label={'Description'}
                        content={house.description}
                        classname={'description_house drop_house'}
                    />

                    <Dropdown
                        label={'Equipements'}
                        content={house.equipments}
                        classname={'equipments_house drop_house'}
                    />
                </div>
            </article>
        </div>
    );
}

export default Logement;
