import React, { useState } from "react";
import {
  Row,
  Col  
} from "reactstrap";
import { render } from "react-dom";
import AddToDatabaseForm from "../todatabase/AddToDatabaseForm";

function Video({videos, video_eval, videoid, source, title, noLikeVideo, onevideoview, dislikeIds}) {

  return (
    <div>
      <h1>Enter your notes on this video for future pampering!!!</h1>
      <p></p>
      <p></p>
      <Row>
        <Col className="videocontainer" sm={{size: 6, offset: 1}}>
          <iframe className="video-center" src={onevideoview.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Col>
        <Col>
          <AddToDatabaseForm videos={videos} source={source} video_eval={video_eval} videoid={videoid} title={title} noLikeVideo={noLikeVideo} onevideoview={onevideoview} dislikeIds={dislikeIds}/>
        </Col>
      </Row>
    </div>
  );
}

export default Video;