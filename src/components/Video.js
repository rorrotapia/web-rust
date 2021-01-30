import React from 'react'
import video from '../assets/video/videohome.mp4';

const Video = () => (
    <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
    </video>
)

export default Video;