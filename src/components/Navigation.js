import React from 'react';

const Navigation = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>
            
            <div className="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item"><a href="#section-about" class="navigation__link"><span>01</span>About Natours</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your Benefits</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular tours</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book Now</a></li>
            </ul>
            </div>
        </div>
      );
}
 
export default Navigation;