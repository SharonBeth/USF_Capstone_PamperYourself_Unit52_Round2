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

function Video5({externalAPICall, videos}) {
  
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
      <Container>      
        <Row>
          <Col md={5}>Whatever I want here</Col>
          <Col md={{ span: 5, offset: 2 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      </Container>

   <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      <p>Testing Video5</p>
      {videos.map((video) => (
        <VideoCard
        videos={videos}
        key={video.id.videoId}
        source={`https://www.youtube.com/embed/${video.id.videoId}`}
        
        />
      ))}
    </div>
  );
}


export default Video5;