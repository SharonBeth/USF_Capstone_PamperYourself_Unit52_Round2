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

function AddToDatabaseForm({videos, source, video_eval, videoid, title, noLikeVideo, onevideoview, dislikeIds}) {
  const [Change, setChange] = useState();
  console.log(source + "add to database")
  const history = useNavigate();
  const initialState = {likeorhate: "", watchit: "", category: "", time: 0, notes: "", link: onevideoview.link, supplies: "", videoid: onevideoview.videoid, title: onevideoview.title, username: onevideoview.username };
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  const [link, setLink] = useState();
    
   

    const handleRadio = (evt) => {
        const {name, id} = evt.target;
        setFormData(formData=>({
            ...formData,
            [name]:id
        }))
    }
    const handleNumber =(evt) => {
        const {name, value } = evt.target;
        let numValue = parseInt(value)
        setFormData(formData=>({
            ...formData,
            [name]: numValue
        }));
    }


    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }));
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(formData, "formdata in handleSubmit")
        // console.log(dislikeIds, "dislikeIds")
        let res = await video_eval(formData);
        if(res.success){
            console.log("Change: it worked at AddToDatabaseForm/handlesubmit.")
            history('/newsearch')
        }else(
            setFormErrors(res.errors)
        )
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Row>
                <legend>
                    Like it, Hate it, or Not relevant!
                </legend>
            </Row>
                <Row>
                <FormGroup>
                
                
                    <Input
                        type="radio"
                        name="likeorhate"
                        id="like"
                        onChange={handleRadio}
                        value="like"
                    />
                    <Label check htmlFor="likeorhate">Like it, Save it in my Playlist for later!</Label>
                </FormGroup>
                <FormGroup>
                    <Input
                        type="radio"
                        name="likeorhate"
                        id="hate"
                        value="hate"
                        onChange={handleRadio}
                    />
                    <Label check htmlFor="likeorhate">Not for me. Next!!</Label>
                </FormGroup>
                </Row>

                <legend>
                    Did you watch it? 
                </legend>
                <Row>
                <FormGroup>
                    <Input
                        type="radio"
                        name="watchit"
                        id="yes"
                        value="yes-1"
                        onChange={handleRadio}
                    />
                    <Label check htmlFor="likeorhate">Watched it.</Label>
                </FormGroup>
                <FormGroup>
                    <Input
                        type="radio"
                        name="watchit"
                        id="no"
                        value="no-1"
                        onChange={handleRadio}
                    />
                    <Label check htmlFor="likeorhate">Not yet, I'll come back.</Label>
                </FormGroup>
                </Row>
                <FormGroup>
                    <Label htmlFor="category">Choose the category to save this video in.</Label>
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
                    <Label htmlFor="time">If you tried it, how long did it take, in minutes?</Label>
                    <Input
                        type="number"
                        name="time"
                        id="time"
                        onChange={handleNumber}
                        value={formData.time}
                    >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="supplies">If you tried it, what supplies did you use or would use in the future?</Label>
                    <Input
                        type="text"
                        name="supplies"
                        id="supplies"
                        onChange={handleChange}
                        value={formData.supplies}
                    >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="notes">Here is a place for any other notes you might want: at time stamp in the video, comment, or just really liked it.</Label>
                    <Input
                        type="text"
                        name="notes"
                        id="notes"
                        onChange={handleChange}
                        value={formData.notes}
                    >
                    </Input>
                </FormGroup>
               
                <Button>Submit</Button>
            </Form>
        </div>
    )

































}

export default AddToDatabaseForm;