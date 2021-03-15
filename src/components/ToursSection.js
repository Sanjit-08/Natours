import React from 'react';
import Card from '../components/Card';
const ToursSection = (props) => {
  const details={
    1:{
      duration:"3 day tour",
      capacity:"Up to 30 people",
      guide:"2 tour guides",
      sleep:"Sleep in cozy hotels",
      difficulty:"easy",
      price:"$256"
    },
    2:{
      duration:"7 day tour",
      capacity:"Up to 40 people",
      guide:"6 tour guides",
      sleep:"Sleep in provided tents",
      difficulty:"medium",
      price:"$456"
    },
    3:{
      duration:"5 day tours",
      capacity:"Up to 15 people",
      guide:"3 tour guides",
      sleep:"Sleep in provided tents",
      difficulty:"hard",
      price:"$856"
    }
  };
    return (
        <section class="section-tours" id="section-tours">
            <div class="u-center-text u-margin-bottom-large">
                <h2 class="heading-secondary">
                    Most popular tours
                </h2>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                  <Card id="1" heading="The Sea Explorer" details={details} />
                </div>
                <div class="col-1-of-3">
                  <Card id="2" heading="The Forest Hiker" details={details} />
                </div>
                <div class="col-1-of-3">
                  <Card id="3" heading="The Snow Adventurer" details={details} />
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                  <a href="#/" className="btn btn--green">Discover all Tours</a>
                </div>
        </section>
      );
}
 
export default ToursSection;