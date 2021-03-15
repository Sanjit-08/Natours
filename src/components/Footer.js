import React from 'react';
import logogreensmall1x from '../images/logogreensmall1x.png';
import logogreensmall2x from '../images/logogreensmall2x.png';
import logogreen1x from '../images/logogreen1x.png';
import logogreen2x from '../images/logogreen2x.png';

const Footer = () => {
    const phonesrc=`${logogreensmall1x} 1x, ${logogreensmall2x} 2x`;
    const src=`${logogreen1x} 1x, ${logogreen2x} 2x`;
    return (
        <footer className="footer">
            <div className="footer__logo-box">

                <picture>
                    <source srcset={phonesrc} media="(max-width:37.5em)"></source>
                    <img srcset={src} alt="logo" className="footer__logo"></img>
                </picture>
              
            </div>
            <div className="row">
                <div className="col-1-of-2">
                  <div className="footer__navigation">
                      <ul className="footer__list">
                          <li className="footer__item"><a href="#/" className="footer__link">Company</a></li>
                          <li className="footer__item"><a href="#/" className="footer__link">Contact Us</a></li>
                          <li className="footer__item"><a href="#/" className="footer__link">Careers</a></li>
                          <li className="footer__item"><a href="#/" className="footer__link">Privacy Policy</a></li>
                          <li className="footer__item"><a href="#/" className="footer__link">Terms</a></li>
                      </ul>
                  </div>
                </div>
                <div className="col-1-of-2">
                  <p className="footer__copyright">
                      Built my <a href="#/" className="footer__link">Sanjit Kurar</a> for his online course!! <a href="#/" className="footer__link">React JS</a>.Copyright &copy; by Sanjit Kurar.You are 100% allowed to use this webpage for both commercial and personal use but NOT to claim it as your own design.A credit to the original author, Sanjit Kurar,is of course highly appreciated!
                  </p>
                </div>
            </div>
        </footer>
      );
}
 
export default Footer;