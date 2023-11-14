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

function HistoryCard({filterHistoryList, videos, category, source, video_eval, videoid, title, noLikeVideo, dislikeLog, likeButton, currentUser,dislikeIds}){

    return(
            <div>
              <Container fluid="true">
                <p>{dislikeIds}Testing</p>
                  <iframe src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <br></br>
                  <br></br>
                  {/* <button onClick={like}>Like it: Add it</button> */}
                  <br></br>
                  <br></br>
                  <p>TEsting more
                  </p>
                  {/* <button onClick={noLike}>Not for me</button> */}
              </Container>
              <br></br>
      
            </div>
    )

}

export default HistoryCard;