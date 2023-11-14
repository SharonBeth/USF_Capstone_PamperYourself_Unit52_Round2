import React, { useEffect, useState } from "react";
import VideoCard from '../search/VideoCard';
import HistoryCard from '../search/HistoryCard';
import { CardImg, Card, CardImgOverlay, Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import {v4 as uuidv4} from 'uuid';



function HistoryList({filterHistoryList, externalAPICall, videos, video_eval, noLikeVideo, dislikeLog, likeButton, currentUser, dislikeIds}) {
  console.log("HistoryList", typeof(filterHistoryList), filterHistoryList)
  return(
  <div>
    <div>
      <p>Your personal assistant sent over your notes on this Video you watched yesterday...and she has the limo scheduled for 7:00 pm sharp!! Have fun tonight... looking so GLAMOROUS!!!</p> 
    </div>
    <div>
      <Slider>
      {filterHistoryList.map((each) => (
        <HistoryCard
        videos={each.video_id}
        key={uuidv4()}
        source={each.link}
        video_eval={each.notes}
        videoid={each.supplies}
        title={each.video_id}
        noLikeVideo={each.watchit}
        dislikeLog={each.watchit}
        likeButton={each.watchit}
        currentUser={currentUser}
        dislikeIds={each.link}
        />
  
      ))}

      </Slider>
    </div>
  </div>
  )
  }

export default HistoryList;