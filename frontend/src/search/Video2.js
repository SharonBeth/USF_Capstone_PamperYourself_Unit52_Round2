import React, { useEffect, useState, createRef, Component } from "react";
import { Link } from "react-router-dom";
// import { Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText, 
//   Button,
//   Card,
//   CardBody,
//   CardTitle,
//   ListGroup,
//   ListGroupItem, 
//   Carousel, 
//   CarouselItem, 
//   CarouselControl, 
//   CarouselIndicators, 
//   CarouselCaption   
// } from "reactstrap";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import { render } from "react-dom";
import VideoCard from './VideoCard';



function Video2({videos}) {
 
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  console.log(videos)
  console.log(videos.length+ "videolength")
  const videolink =`https://www.youtube.com/embed/${videos[0].id.videoId}`
  
  return (
    <div>
    <div className="carouselcard">
      
    <Carousel activeIndex={index} onSelect={handleSelect}>
    {videos.map((video) => (
        <VideoCard 
          category={video.id.videoId}
          key={video.id.videoId}
          source={video.id.videoId}
        />
     
     ))}
    </Carousel>
    </div>
    </div>
  );
}


export default Video2;