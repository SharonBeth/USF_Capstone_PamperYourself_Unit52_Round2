import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { render } from "react-dom";
import AddToDatabaseForm from "../todatabase/AddToDatabaseForm";
import DBapi from '../apis/dbapi.js';


function VideoCard({videos, category, source, video_eval, videoid, title, noLikeVideo, dislikeLog, likeButton, currentUser}){
  const history = useNavigate();
  const initialState = {link: source, videoid: videoid, title: title, likeorhate:"", username: currentUser.username}
  const [onevideoinfo, setOneVideoView] = useState(initialState)
  
  const like = async () => { 
    console.log("like worked as like")
    let likebutton = await likeButton(onevideoinfo)
    history('/onevideo')
  }  
  
  const noLike = async () => {
    console.log("no like worked as no like")
    let hate = "hate";
    setOneVideoView(onevideoinfo=>({
      ...onevideoinfo,
      ["likeorhate"]: hate,

    }));
    let logging = await noLikeVideo(onevideoinfo)
    if(logging.success){
      console.log("noLikeVideo logging video Complete")
    }
    let dislike = await dislikeLog(onevideoinfo)
    if(dislike.success){
      console.log("noLikeVideo logging dislike table Complete")
    }
  }
  useEffect(() => {
    console.log(onevideoinfo);
  }, [onevideoinfo]);

  return (
      <div>
        <Container fluid="true">
          <p>Testing VideoCard</p>
            <iframe src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <br></br>
            <br></br>
            <button onClick={like}>Like it: Add it</button>
            <br></br>
            <br></br>
            <button onClick={noLike}>Not for me</button>
        </Container>
        <br></br>
      </div>
    );
  }
  
export default VideoCard;

// return (
//   <div>
//     <Container fluid="true">
//       <Row>
//         <Col md={{ span: 8 }}>
//         <Card >
//         {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
//         <Card.Body>
//           <Card.Title>Love it/Hate it:</Card.Title>
//             <AddToDatabaseForm videos={videos} source={source} video_eval={video_eval} videoid={videoid} title={title}/>
//         </Card.Body>
//       </Card>
            
//         </Col>
//         <Col md={{ span: 4 }}>
//           <br></br>
//         <iframe maxwidth="1000" maxheight="500" src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
//         </Col>
//       </Row>



//     </Container>
//     <br></br>

//   </div>
// );
