import React from "react";
import {
  Button,
  Row, 
  Col
} from "reactstrap";

function MainPageOut({}){
    return(
        <div>
            <h1>Welcome to Pamper Yourself!!!</h1>
            <p>We welcome you to our website for wonderful experience. Our goal is to help you find fun and easy ways to stay up on trends, find that favorite hair do you have been looking for, and maybe create a new tool to help you change your look. </p>
            <Row></Row>
            <Row>
                <Col sm={{size: 3, offset: 3}}>
                    <Button href="/signup" style={{background:"#ed80df"}} >Sign Up</Button>
                </Col>
                <Col sm={{size: 3}}>
                    <Button href="/login" style={{background:"#ed80df"}}>Login</Button>
                </Col>
            </Row>
        </div>
    )
}

export default MainPageOut;