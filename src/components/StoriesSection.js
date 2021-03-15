import React from 'react';
import StoryCard from './StoryCard';
import video from '../images/video.mp4';
import video2 from '../images/video2.webm';
import Video from './Video';


const StoriesSection = (props) => {
    const storyline={
        1:{
            heading:" I had the best week ever with my family",
            details:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, porro harum natus aspernatur maiores eius praesentium blanditiis minus ab nihil ut voluptas alias nisi facere. Numquam, porro harum natus aspernatur maiores eius praesentium blanditiis minus ab nihil ut voluptas alias nisi facere. ",
            name:"Will Smith"
        },
        2:{
            heading:"Wow!My Life is completely different now",
            details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, porro harum natus aspernatur maiores eius praesentium blanditiis minus ab nihil ut voluptas alias nisi facere. Numquam, porro harum natus aspernatur maiores eius praesentium blanditiis minus ab nihil ut voluptas alias nisi facere. ",
            name:"Jack Wilson"
            
        }
    }
    return (
        <section className="section-stories">
            
            <div className="bg-video">
            <Video mp4={video} webm={video2}/>
            </div>

            <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">
                We make people genuinely happy
                </h2>
            </div>
        <div className="row">
            <StoryCard id="1" storyline={storyline} />
            <StoryCard id="2" storyline={storyline} />
            <div className="u-center-text u-margin-bottom-large">
            <a href="#/" className="btn-text">Read more &rarr;</a>
            </div>
        </div>
        </section>
      );
}
 
export default StoriesSection;