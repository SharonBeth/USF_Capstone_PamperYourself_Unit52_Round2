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

function Video3({externalAPICall, videos}) {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  console.log(videos)
  console.log(videos.length+ "videolength")
  const videolink =`https://www.youtube.com/embed/${videos[0].id.videoId}`
  let newvideolinks = videos.map((video) => (
    `https://www.youtube.com/embed/${video.id.videoId}`
  )
  );
  return (
    <div>
      
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <p>Testing Video3</p>
      <Carousel.Item>
        <iframe maxwidth="1000" maxheight="500" src={`https://www.youtube.com/embed/${videos[0].id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <div>
          <h3></h3>
          <h3></h3>
          <h3>{videos[0].id.videoId}</h3>
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

      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://t4.ftcdn.net/jpg/02/66/72/41/240_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
        alt="FirstSlide"
        />"
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://t4.ftcdn.net/jpg/00/84/66/63/240_F_84666330_LoeYCZ5LCobNwWePKbykqEfdQOZ6fipq.jpg"
        alt="FirstSlide"
        />"
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export default Video3;