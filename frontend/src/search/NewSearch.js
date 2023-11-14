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
import SearchForm from "../common/SearchForm";

function NewSearch({externalAPICall, dislikeIds}) {
    const [change, setChange] = useState();
    
    return(
        <div>
            <p>Get your new look!!</p>
            <p>Fill out the form below to search for videos.</p>
            <SearchForm externalAPICall={externalAPICall} dislikeIds={dislikeIds} />
        </div>
    )
}

export default NewSearch;