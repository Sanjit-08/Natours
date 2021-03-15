import React from 'react';

const Skills = () => {
    return (
       <> 
    <div className="u-center u-margin-bottom-medium">
      <h2 className="heading-secondary">
          My Skills
      </h2>
    </div>
        <div className="row">
        <div className="col-1-of-3">
            <div className="heading-tertiary">
                HTML
            </div>
            <div className="progress-bar progress-bar--1">&nbsp;</div>   
        </div>
        <div className="col-1-of-3">
        <div className="heading-tertiary">
                CSS
        </div>
            <div className="progress-bar progress-bar--2">&nbsp;</div> 
        </div>
        <div className="col-1-of-3">
        <div className="heading-tertiary">
                Javascript
            </div>
            <div className="progress-bar progress-bar--3">&nbsp;</div> 
        </div>
       </div>
       <div className="row">
        <div className="col-1-of-3">
        <div className="heading-tertiary">
                Java(Core)
            </div>
            <div className="progress-bar progress-bar--4">&nbsp;</div> 
        </div>
        <div className="col-1-of-3">
        <div className="heading-tertiary">
                Bootstrap
            </div>
            <div className="progress-bar progress-bar--5">&nbsp;</div> 
        </div>
        <div className="col-1-of-3">
        <div className="heading-tertiary">
                SASS
            </div>
            <div className="progress-bar progress-bar--6">&nbsp;</div> 
        </div>
        </div>
        <div className="row">

        <div className="col-1-of-3">
        <div className="heading-tertiary">
                DS & ALGO
            </div>
            <div className="progress-bar progress-bar--7">&nbsp;</div> 
        </div>

        <div className="col-1-of-3">
        <div className="heading-tertiary">
                Redux
            </div>
            <div className="progress-bar progress-bar--8">&nbsp;</div> 
        </div>

        <div className="col-1-of-3">
        <div className="heading-tertiary">
                SQL
        </div>
            <div className="progress-bar progress-bar--9">&nbsp;</div> 
        </div>

        </div>
      </>  
      );
}
 
export default Skills;