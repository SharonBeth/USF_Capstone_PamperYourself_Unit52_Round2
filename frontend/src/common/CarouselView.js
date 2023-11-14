import React, { useEffect, useState } from "react";
import VideoCard from '../search/VideoCard';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function CarouselView2({externalAPICall, videos, video_eval, noLikeVideo, dislikeLog, likeButton, currentUser, dislikeIds}) {
  
  console.log("CarouselViewComponent", typeof(videos))
  return(
  <div>
    <div>
      <p>Pamper YourselfTitle: CarouselView</p> 
    </div>
    <div>
      <Slider>
      {videos.map((video) => (
        <VideoCard
        videos={videos}
        key={video.id.videoId}
        source={`https://www.youtube.com/embed/${video.id.videoId}`}
        video_eval={video_eval}
        videoid={video.id.videoId}
        title={video.snippet.title}
        noLikeVideo={noLikeVideo}
        dislikeLog={dislikeLog}
        likeButton={likeButton}
        currentUser={currentUser}
        dislikeIds={dislikeIds}
        />
      ))}
      </Slider>
    </div>
  </div>
  )
  }

export default CarouselView2;