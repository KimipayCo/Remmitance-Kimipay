import React from "react";

const VideoComponent = () => {
    return ( 
        <div className="page-section">
            <div className="videos row gx-3">
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" alt="Title" />
                        <div className="play-button"><i class="bi bi-play-fill"></i></div>
                        <p className="thumbnail-title">Video Title</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" alt="Title" />
                        <div className="play-button"><i class="bi bi-play-fill"></i></div>
                        <p className="thumbnail-title">Video Title</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" alt="Title" />
                        <div className="play-button"><i class="bi bi-play-fill"></i></div>
                        <p className="thumbnail-title">Video Title</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoComponent;