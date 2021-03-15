import React from 'react';

const Card = (props) => {
    const cardpicture=`card__picture card__picture--${props.id}`;
    const details=props.details[props.id];
    const {heading,text}=details;
    return (
        <div class="card">
           <div className="card__side">
            <div className={cardpicture}>
                &nbsp;
            </div>
            <div className="card__heading">
                {heading}
            </div>
            <div className="card__details">
              {text}
            </div>
            <a href="#" className="btn">Github</a>
            </div>   
        </div>
      );
}
 
export default Card;