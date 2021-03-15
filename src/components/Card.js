import React from 'react';

const Card = (props) => {
    const backside=`card__side card__side--back card__side--back-${props.id}`;
    const cardpicture=`card__picture card__picture--${props.id}`;
    const details=props.details[props.id];
    const {duration,capacity,guide,sleep,difficulty,price}=details;
    return (
        <div className="card">
            <div className="card__side card__side--front">
                <div className={cardpicture}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span--${props.id}`}>{props.heading}</span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>{duration}</li>
                        <li>{capacity}</li>
                        <li>{guide}</li>
                        <li>{sleep}</li>
                        <li>Difficulty:{difficulty}</li>
                    </ul>
                </div>
            </div>
            <div className={backside}>
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Only</p>
                        <p class="card__price-value">{price}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book Now</a>
                </div>

            </div>
        </div>
      );
}
 
export default Card;