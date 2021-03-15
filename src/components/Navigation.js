import React from 'react';
import profile from '../images/profile.jpeg';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
             <div className="navigation__picture">
                <figure className="navigation__shape">
                    <img src={profile} alt="profile" className="navigation__image"></img>
                    <figcaption className="navigation__caption">Sanjit Kurar</figcaption>
                </figure>
            </div>

            <div className="navigation__text">SK</div>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>
           
            <div className="navigation__nav">
             <ul className="navigation__list">
                <li className="navigation__item"><Link to="/" className="navigation__link">Home</Link></li>
                <li  className="navigation__item"><Link to="/about" className="navigation__link">About</Link></li>
                <li  className="navigation__item"><Link to="/portfolio" className="navigation__link">Portfolio</Link></li>
                <li  className="navigation__item"><Link to="/contact" className="navigation__link">Contact</Link></li>
            </ul>
          </div>

     
            
        </div>
      );
}
 
export default Navigation;