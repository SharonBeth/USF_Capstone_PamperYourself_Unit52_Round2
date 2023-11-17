import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem, 
  Row,
  Col,
  CardHeader
} from "reactstrap";

function HistoryCard({source, supplies, notes}){
  return(
          <div>
            <Row>
              <Col sm={{size: 4, offset: 1}}>
                <iframe className="historycard" src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Col>
              <Col className="verticalcenter" fluid="true" sm={{size: 4, offset: 2}}>
                <Card color="info" body>
                  <CardHeader >Your Saved Video Notes:</CardHeader>
                  <ListGroup flush>
                    <ListGroupItem id="noshadow1">Supplies Needed: {supplies}</ListGroupItem>
                    <ListGroupItem id="noshadow2">Extra Notes: {notes}</ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </div>
  )
}

export default HistoryCard;