import React, { useEffect, useState } from "react";
import VideoCard from '../search/VideoCard';
import { CardImg, Card, CardImgOverlay, Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function HistoryList({filterHistoryList, externalAPICall, videos, video_eval, noLikeVideo, dislikeLog, likeButton, currentUser, dislikeIds}) {
  console.log("CarouselViewComponent")
  console.log(filterHistoryList[0].video_id, "fileter HistoryList")
  return(
  <div>
    <div>
      <p>Your personal assistant sent over your notes on this Video you watched yesterday...and she has the limo scheduled for 7:00 pm sharp!! Have fun tonight... looking so GLAMOROUS!!!</p> 
    </div>
    <div>
      <Slider>
        <p>Testing History list</p>
        

      </Slider>
    </div>
  </div>
  )
  }

export default HistoryList;