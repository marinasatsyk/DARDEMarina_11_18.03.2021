import React from 'react';
import Red_star from '../assets/Star_red.svg';
import Grey_star from '../assets/Star_grey.svg';

function RatingScale({ scaleValue }) {
    // const scaleRating = props.rating;
    const range = [1, 2, 3, 4, 5];
    const activRanc = <img src={Red_star} alt="sun-icon" />;
    const nonActivRanc = <img src={Grey_star} alt="sun-icon" />;

    return (
        <div>
            {range.map(rangeElem =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()} className="star">
                        {activRanc}
                    </span>
                ) : (
                    <span key={rangeElem.toString()} className="star">
                        {nonActivRanc}
                    </span>
                )
            )}
        </div>
    );
}
export default RatingScale;
