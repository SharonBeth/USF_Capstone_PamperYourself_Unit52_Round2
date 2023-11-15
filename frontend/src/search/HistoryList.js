import React, { useEffect, useState } from "react";
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
      <p>TEsting on History Card</p>
      <p>Your personal assistant sent over your notes on this Video you watched yesterday...and she has the limo scheduled for 7:00 pm sharp!! Have fun tonight... looking so GLAMOROUS!!!</p> 
    </div>
    <div>
      <Slider>
      {filterHistoryList.map((each) => (
        <HistoryCard
        key={uuidv4()}
        source={each.link}
        supplies={each.supplies}
        watchit={each.watchit}
        currentUser={currentUser}
        time={each.time}
        notes={each.notes}



        />
  
      ))}

      </Slider>
    </div>
  </div>
  )
  }

export default HistoryList;