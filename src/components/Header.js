import React from 'react';
import logowhite from '../images/logowhite.png';
const Header = (props) => {
    return (
        <header className="header">
           <div className="header__logo-box">
               <img src={logowhite} alt="logo" className="header__logo"></img>
           </div>
           <div class="header__text-box">
           <h1 className="heading-primary">
               <span className="heading-primary--main">Outdoors</span>
               <span className="heading-primary--sub">is where life happens</span>
           </h1>
           <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
           </div>
        </header>
      );
}
 
export default Header;