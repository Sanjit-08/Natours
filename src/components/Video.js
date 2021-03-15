import React from 'react';

const Video = (props) => {
    console.log(props);
    return (
        
        <video className="bg-video__content" autoPlay muted loop>
            <source src={props.mp4} type="video/mp4"></source> 
            <source src={props.webm} type="video/webm"></source>
        </video>
      );
}
 
export default Video;