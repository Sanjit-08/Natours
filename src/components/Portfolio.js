import React from 'react';
import Card from './Card';

const Portfolio = () => {
    const details={
        "1":{
            heading:"Natours Project",
            text:"This is a project covering different aspects of advanced CSS,grid system and a fully responsive website made using SASS!!"
        }
    }
    return (
        <div className="portfolio">
            <div className="u-center u-margin-bottom-medium heading-secondary heading-secondary--project">
                Projects
            </div>

            <div className="row">
                <div className="col-1-of-3">
                  <Card details={details} id="1" />
                </div>
                <div className="col-1-of-3">
                 {/* <Card /> */}
                </div>
                <div className="col-1-of-3">
                  {/* <Card /> */}
                </div>
            </div>
        </div>
      );
}
 
export default Portfolio;