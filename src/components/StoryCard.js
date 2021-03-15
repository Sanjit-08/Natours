import React from 'react';
// import nat8 from "../images/nat8.jpg";
// import nat9 from "../images/nat9.jpg";
import nat12small from "../images/nat12small.jpg";
import nat12 from "../images/nat12.jpg";
import nat13small from "../images/nat13small.jpg";
import nat13 from "../images/nat13.jpg";


const StoryCard = (props) => {
  const storyline=props.storyline[props.id];
  const {heading,details,name}=storyline;
  const source= props.id === '1' ? `${nat12small} 640w, ${nat12} 1000w` : `${nat13small} 640w, ${nat13} 1000w`;
    return (
        <div className="story">
            <figure class="story__shape">
              <img srcSet={source}
                   sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 24vw, 225px"
                  alt="nat8" 
                  className="story__image">
              </img>
              <figcaption className="story__caption">
                {name}
              </figcaption>
            </figure>
            <div class="story__text">
                <h3 className=" u-margin-bottom-small heading-tertiary">
                   {heading}
                </h3>
                <p> 
                 {details}
                </p>
            </div>
        </div>
      );
}
 
export default StoryCard;