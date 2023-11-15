import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem, 
  Carousel, 
  CarouselItem, 
  CarouselControl, 
  CarouselIndicators, 
  CarouselCaption,
  Container,
  Row,
  Col,
  CardText
} from "reactstrap";
import { render } from "react-dom";

function HistoryCard({source, supplies, watchit, time, notes, title, currentUser}){
  return(
          <div>
            <Container fluid="true">
              <iframe src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Container>
            <Row>
              <Col sm="3"></Col>
              <Col sm="6">
                <Card color="secodary" body>
                  <Button>
                    <CardText>Supplies Needed: {supplies}</CardText>
                    <CardText>Extra Notes:     {notes}</CardText>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
  )
}

export default HistoryCard;