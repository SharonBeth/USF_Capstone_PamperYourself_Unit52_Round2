import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, 
    Button, 
    Carousel, 
    CarouselItem, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselCaption   
  } from "reactstrap";
import { render } from "react-dom";
import Video5 from '../search/Video5';
import Example from '../Blanks/NewComponentStandard';
import VideoCard from '../search/VideoCard';


function CarouselView({externalAPICall, videos, video_eval, noLikeVideo, dislikeLog, likeButton, currentUser, dislikeIds}) {
  console.log("CarouselViewComponent")
  return(
  <div>
    <div>
      <p>Pamper Yourself: Title CarouselView2</p> 
    </div>
    <div>
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
    </div>
  </div>
  )
  }

export default CarouselView;


{/* <div>
      <p>Pamper Yourself</p>
    </div>
    <div>
      <Video5 props="stuff" externalAPICall={externalAPICall} videos={videos} video_eval={video_eval}/>
    </div> */}