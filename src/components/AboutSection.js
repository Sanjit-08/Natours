import React from 'react';
import ImageComposition from './ImageComposition';

const AboutSection = (props) => {
    return (
        <section className="section-about" id="section-about">
            <div className="u-center-text u-margin-bottom-large">
            <h2 className="heading-secondary">
                Exciting tours for adventurous people
            </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall in love with nature</h3>
                  <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, porro harum natus aspernatur autem maiores eius praesentium blanditiis minus ab nihil ut voluptas alias nisi facere, dolorum fugit, temporibus ipsa!</p>

                  <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                  <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, iusto? Provident, rem ipsam! Natus tempore.</p>

                  <a href="#" className="btn-text">Read more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                  <ImageComposition/>
                </div>
            </div>
        </section>
      );
}
 
export default AboutSection;