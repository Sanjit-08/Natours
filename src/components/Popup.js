import React,{useEffect} from 'react';
import nat9 from "../images/nat9.jpg";
import nat11 from "../images/nat11.jpg";
import nat11large from "../images/nat11large.jpg";


const Popup = () => {
  const img1=`${nat11} 640w, ${nat11large} 1000w`; 
    return (
      <>
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                  <img srcSet={img1}
                      sizes="(max-width:1200px) 37.5vw, (max-width:900px) 37.44vw,307px"
                      alt="image1"
                      className="popup__img"></img>
                  <img src={nat9} alt="tour photo" className="popup__img"></img>
                </div>
                <div className="popup__right">
                  <a href="#section-tours" className="popup__close">&times;</a>
                  <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                  <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; please read the terms before booking</h3>
                  <p className="popup__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At varius vel pharetra vel turpis nunc. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Sapien faucibus et molestie ac feugiat sed lectus.
                  </p>
                  <a href="#/" className="btn btn--green">Book now</a>
                </div>
                
            </div>
        </div>
       </> 
      );
}
 
export default Popup;