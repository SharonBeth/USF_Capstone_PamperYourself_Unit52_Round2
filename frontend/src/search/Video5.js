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
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { render } from "react-dom";
import VideoCard from './VideoCard';
import AddToDatabaseForm from "../todatabase/AddToDatabaseForm";

function Video5({externalAPICall, videos, video_eval, videoid, source, title, link, noLikeVideo, onevideoview, dislikeIds}) {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      
      <p>Enter This for furture Pampering!!</p>
      <iframe maxwidth="1000" maxheight="500" src={onevideoview.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <AddToDatabaseForm videos={videos} source={source} video_eval={video_eval} videoid={videoid} title={title} noLikeVideo={noLikeVideo} onevideoview={onevideoview} dislikeIds={dislikeIds}/>
      
    </div>
  );
}


export default Video5;