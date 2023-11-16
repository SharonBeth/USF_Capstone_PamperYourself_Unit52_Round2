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
    Carousel, 
    CarouselItem, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselCaption,
    Form,
    FormGroup,
    Label,
    Input, 
    Row, 
    Col
  } from "reactstrap";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { render } from "react-dom";

function HistoryForm({videos, source, video_eval, videoid, title, noLikeVideo, onevideoview, video_historyPull, historyList, filterHistory, currentUser, filterHistoryList}) {
  const [Change, setChange] = useState();
  console.log(source + "add to database")
  const history = useNavigate();
  const initialState = {username: currentUser.username,category: "", time: "", notes: "",  supplies: "" };
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  const [link, setLink] = useState();
    

    // const handleRadio = (evt) => {
    //     const {name, id} = evt.target;
    //     setFormData(formData=>({
    //         ...formData,
    //         [name]:id
    //     }))
    // }
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }));
    }
    const handleNumber =(evt) => {
        const {name, value } = evt.target;
        let numValue = parseInt(value)
        setFormData(formData=>({
            ...formData,
            [name]: numValue
        }));
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(formData);
        let res = await filterHistory(formData);
        console.log("historyform: handleSubmit complete")
        history('/historylist')


    }
    console.log(historyList, "HistoryForm/Console.log-historyList")
    return(
    <div>
        <div>
        <Row>
                <h1>
                    You already did the hard part of researching, now just look in your saved video list:
                    </h1>
            </Row>
        <Col sm={{size: 8, offset: 2}}>
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label sm={6} htmlFor="category">What category are you looking for today to beautify yourself?</Label>
                    <Col sm={6}>
                    <Input
                        type="select"
                        name="category"
                        id="category"
                        onChange={handleChange}
                        value={formData.category}
                    > 
                      <option></option>
                      <option>Hair</option>
                      <option>Nails</option>
                      <option>Skin Care & Make-Up</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={6} htmlFor="time">How much time do you have today?</Label>
                    <Col sm={6}>
                    <Input
                        type="number"
                        name="time"
                        id="time"
                        onChange={handleNumber}
                        value={formData.time}
                    >
                    </Input>
                    </Col>
                </FormGroup>
                <br></br>
                <Button style={{background:"#ed80df"}}>Submit</Button>
            </Form>
            </Col>
        </div>
    </div>
    )
}

export default HistoryForm;