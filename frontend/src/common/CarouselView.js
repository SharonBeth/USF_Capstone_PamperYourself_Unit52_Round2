import React from "react";
import VideoCard from '../search/VideoCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Container} from "reactstrap";


function CarouselView({videos, video_eval, noLikeVideo, dislikeLog, likeButton, currentUser, dislikeIds}) {

  return(
  <div>
    <div>
      <Container>
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
      </Container>
    </div>
  </div>
  )
}

export default CarouselView;