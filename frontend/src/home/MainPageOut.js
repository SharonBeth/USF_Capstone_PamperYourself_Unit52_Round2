import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem, Button
} from "reactstrap";
import { render } from "react-dom";

function MainPageOut({}){
    return(
        <div>
            <h1>Welcome to Pamper Yourself!!!</h1>
            <p>We welcome you to our website for wonderful experience. Our goal is to help you find fun and easy ways to stay up on trends, find that favorite hair do you have been looking for, and maybe create a new tool to help you change your look. </p>
            <Button href="/signup" color="info">Sign Up</Button>
            <Button href="/login" color="info">Login</Button>
        </div>
    )
}

export default MainPageOut;