import React from "react";
import VideoComponent from "./VideoComponent"

const VideoTutorialsComponent = () => {
    return (
        <div className="page-section">
            <h2 className="heading">Video Tutorials</h2>
            <div className="categories row">
                <div className="category">All</div>
                <div className="category">Getting Started</div>
                <div className="category">Sending Funds</div>
                <div className="category">Recieving Funds</div>
                <div className="category">Security and Privacy</div>
                <div className="category">Troubleshooting and Support</div>
            </div>
            <VideoComponent />
        </div>
    );
}
 
export default VideoTutorialsComponent;