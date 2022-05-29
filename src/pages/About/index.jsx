import React from 'react';
import RatingScale from '../../utils/ratingScale';

function About() {
    return (
        <div>
            <div>A propos</div>
            <div>{<RatingScale scaleValue={'3'} />}</div>
        </div>
    );
}

export default About;
