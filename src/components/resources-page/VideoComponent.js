import React from "react";
import { Button } from "react-bootstrap";

const VideoComponent = () => {
    return ( 
        <div>
            <div className="videos row gx-3">
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" alt="Title" />
                        <div className="play-button"><i className="bi bi-play-fill"></i></div>
                        <p className="thumbnail-title">Video Title</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" alt="Title" />
                        <div className="play-button"><i className="bi bi-play-fill"></i></div>
                        <p className="thumbnail-title">Video Title</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" alt="Title" />
                        <div className="play-button"><i className="bi bi-play-fill"></i></div>
                        <p className="thumbnail-title">Video Title</p>
                    </div>
                </div>
            </div>
            <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#3799D4" }}
                className="see-more-btn"
            >
                See more
            </Button>
        </div>
    );
}

export default VideoComponent;