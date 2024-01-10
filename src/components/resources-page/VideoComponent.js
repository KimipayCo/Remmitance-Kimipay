import React from "react";
import { Button } from "react-bootstrap";

const VideoComponent = () => {
    return ( 
        <div className="row">
            <div className="videos row">
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" className="thumbnail-img" alt="Title" />
                        <div className="play-button"><i className="bi bi-play-fill"></i></div>
                    </div>
                    <p className="thumbnail-title">Video Title</p>
                </div>
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" className="thumbnail-img" alt="Title" />
                        <div className="play-button"><i className="bi bi-play-fill"></i></div>
                    </div>
                    <p className="thumbnail-title">Video Title</p>
                </div>
                <div className="col-md-4">
                    <div className="youtube-thumbnail">
                        <img src="../../thumbnail.jpg" className="thumbnail-img" alt="Title" />
                        <div className="play-button"><i className="bi bi-play-fill"></i></div>
                    </div>
                    <p className="thumbnail-title">Video Title</p>
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