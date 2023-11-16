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

function Video4({videos}) {
  // const [index, setIndex] = useState(0);
  // const [animating, setAnimating] = useState(false);
  
  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  console.log(videos)
  console.log(videos.length+ "videolength")
  const videolink ="https://www.youtube.com/embed";
  
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    
      {videos.map((video) =>(
        // let videolink =`https://www.youtube.com/embed/${video.id.videoId}`
        <div className="carousel-card">
      <Carousel.Item>
        <iframe maxwidth="1000" maxheight="500" src="https://www.youtube.com/embed/8DHP5XZPSjc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div>
          <h3></h3>
          <h3></h3>
          <h3>{video.id.videoId}</h3>
        </div>
        <div>
          <p>If you like this video, click the button below to add it to one of your playlists!</p>
        </div>
        <div>
          <button></button>
        </div>
        <div>
          <p>   sjfl;ksajld;fkjas;lkjf   </p>
        </div>
        <div></div>
        <div></div>
      </Carousel.Item>
      </div>
      ))}
    </Carousel>
    </div>
    
  );
}


export default Video4;