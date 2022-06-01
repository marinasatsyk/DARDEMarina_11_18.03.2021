import React, { useState } from 'react';
import arrow_left from '../../assets/arrow_left.svg';
import arrow_right from '../../assets/arrow_right.svg';

function Carousel({ photos }) {
    const [indexImg, setIndexImg] = useState(0);
    const updateImg = (s) => {
        // let x = indexImg + s;
        // if (x >= house.pictures.length) x = 0;
        // if (x < 0) x = house.pictures.length - 1;
        setIndexImg((indexImg + s + photos.length) % photos.length);
    };

    return (
        <div className="wrap_carousel">
            <img src={`${photos[indexImg]}`} alt="" className="displayed-img" />
            <img
                src={`${arrow_left}`}
                alt="flash back"
                className="left"
                onClick={() => {
                    updateImg(-1);
                }}
            />
            <div className="numPhoto">{`${indexImg + 1}/${photos.length}`}</div>
            <img
                src={`${arrow_right}`}
                alt="flash forward"
                className="right"
                onClick={() => {
                    updateImg(1);
                }}
            />
        </div>
    );
}

export default Carousel;
