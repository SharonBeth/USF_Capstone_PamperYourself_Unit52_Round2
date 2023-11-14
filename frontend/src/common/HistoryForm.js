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
    Row 
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
            <Form onSubmit={handleSubmit}>
            <Row>
                <legend>
                    You already did the hard part of researching, now just look in your saved video list:
                </legend>
            </Row>
  
                <FormGroup>
                    <Label htmlFor="category">What category are you looking for today to beautify yourself?</Label>
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
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="time">How much time do you have today?</Label>
                    <Input
                        type="number"
                        name="time"
                        id="time"
                        onChange={handleNumber}
                        value={formData.time}
                    >
                    </Input>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
        <div className="HistoryLinkList">
            {filterHistoryList.map((each) => (
                <div>
                    <p></p>
                    <iframe maxwidth="1000" maxheight="500" src={each.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            ))}

        </div>
    </div>
    )
}

export default HistoryForm;