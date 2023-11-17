import React from "react";
import HistoryCard from '../search/HistoryCard';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import {v4 as uuidv4} from 'uuid';

function HistoryList({filterHistoryList, currentUser}) {
  return(
          <div>
            <Row>
              <Col sm={{size: 6, offset: 3}}>
                <h5>Your personal assistant sent over your notes on this video you watched yesterday...and she has the limo scheduled for 7:00 pm sharp!! Have fun tonight... looking so GLAMOROUS!!!</h5> 
              </Col>
            </Row>
            <div>
              <Container>
                <Slider>
                  {filterHistoryList.map((each) => (
                    <HistoryCard
                      key={uuidv4()}
                      source={each.link}
                      supplies={each.supplies}
                      watchit={each.watchit}
                      currentUser={currentUser}
                      time={each.time}
                      notes={each.notes}
                    />
                  ))}
                </Slider>
              </Container>
            </div>
          </div>
  )
}

export default HistoryList;