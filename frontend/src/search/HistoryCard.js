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
            <Container >
              <Col sm={{
                            size: 10,
                            offset: 1
                        }}>
              <iframe className="historycard" src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <br></br>
              </Col>
            </Container>
            <Row>
              <Col sm={{
                            size: 10,
                            offset: 1
                        }}>
                <Card color="secodary" body>
                  <Button style={{background:"#ed80df"}}>
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