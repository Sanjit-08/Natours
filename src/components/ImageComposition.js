import React from 'react';
import nat1 from '../images/nat1.jpg';
import nat1large from '../images/nat1large.jpg';
import nat2 from '../images/nat2.jpg';
import nat2large from '../images/nat2large.jpg';
import nat3 from '../images/nat3.jpg';
import nat3large from '../images/nat3large.jpg';

const ImageComposition = () => {
    const src1=`${nat1} 300w, ${nat1large} 1000w`;
    const src2=`${nat2} 300w, ${nat2large} 1000w`;
    const src3=`${nat3} 300w, ${nat3large} 1000w`;
    return (
        <div class="composition">
            <img srcSet={src1}
              sizes="(max-width:56.25em) 17vw, (max-width:37.5em) 27vw, 267.3px"
              alt="Photo 1"
             className="composition__photo composition__photo--p1"></img>
            <img srcSet={src2}
             sizes="(max-width:56.25em) 17vw, (max-width:37.5em) 27vw, 267.3px"
             alt="Photo 2"
             className="composition__photo composition__photo--p2"></img>
            <img srcSet={src3}
              sizes="(max-width:56.25em) 17vw, (max-width:37.5em) 27vw, 267.3px"
              alt="Photo 3" 
              className="composition__photo composition__photo--p3"></img>
        </div>
      );
}
 
export default ImageComposition;