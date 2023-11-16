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
    Container,
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
            <Col sm={{size: 10}}>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Row sm={{size: 4}}>
                       <p></p>
                    </Row>
                <Row>
                    <Col sm={{size: 4}}>
                    <p>Watched it? </p>
                    </Col>
                    <Col sm={{size: 3 }}>
                <FormGroup>
                    <Input
                        type="radio"
                        name="watchit"
                        id="yes"
                        value="yes-1"
                        onChange={handleRadio}
                    />
                    <Label check htmlFor="likeorhate">Yes.</Label>
                </FormGroup>
                </Col>
                
              <Col>
                    <Input
                        type="radio"
                        name="watchit"
                        id="no"
                        value="no-1"
                        onChange={handleRadio}
                    />
                    <Label check htmlFor="likeorhate">Not yet.</Label>
                </Col>
                </Row>
                    <Label htmlFor="category">Categorize your video.</Label>
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
                    <Label htmlFor="time">How many minutes did it take?</Label>
                    <Input
                        type="number"
                        name="time"
                        id="time"
                        onChange={handleNumber}
                        value={formData.time}
                    >
                    </Input>
                    <Label htmlFor="supplies"></Label>
                    <Input
                        type="text"
                        name="supplies"
                        id="supplies"
                        onChange={handleChange}
                        value={formData.supplies}
                        placeholder="What supplies did you use?"
                    >
                    </Input>
                    <Label htmlFor="notes"></Label>
                    <Input
                        type="text"
                        name="notes"
                        id="notes"
                        onChange={handleChange}
                        value={formData.notes}
                        placeholder="Any other notes for yourself."
                    >
                    </Input>
                    </FormGroup>
                <Button style={{background:"#ed80df"}}>Submit</Button>
            </Form>
            </Col>
        </div>
    )

































}

export default AddToDatabaseForm;