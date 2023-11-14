import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText, 
//     Button, 
//     Carousel, 
//     CarouselItem, 
//     CarouselControl, 
//     CarouselIndicators, 
//     CarouselCaption   
//   } from "reactstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { render } from "react-dom";

function AddToDatabaseForm2({}) {
  const [Change, setChange] = useState();

  const history = useNavigate();
  const initialState = {likeorhate: "", watchedit: "", category: "", time: "", notes: ""};
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
        }));
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(formData)
        // if(res.success) {
        //     history('/carousel');
        // }else{
        //     setFormErrors(res.errors);
        // }
    }

    return(
        <div>
        <Form onSubmit={handleSubmit}>
            <div key={`inline-radio1`} className="mb-3">
            <Form.Check
                inline
                label="Liked it"
                name="likeorhate"
                type="radio"
                id="liked"
                value={formData.likeorhate}
                onChange={(e) => setName}
            />
            <Form.Check
                inline
                label="Not for me"
                name="likeorhate"
                type="radio"
                id="hated"
                value={formData.likeorhate}
                onChange={handleChange}
            />
            </div>
            <div key={`inline-radio2`} className="mb-3">
            <Form.Check
                inline
                label="Watched it"
                name="watchedit"
                type="radio"
                id="watched"
                value={formData.watchedit}
                onChange={handleChange}
            />
            <Form.Check
                inline
                label="Not Yet"
                name="watchedit"
                type="radio"
                id="notwatched"
                value={formData.watchedit}
                onChange={handleChange}
   
            />
            </div>
            <Form.Select value={formData.category} onChange={handleChange} id="category" aria-label="Default select example">
                <option></option>
                <option value="hair">Hair & Hair Do's</option>
                <option value="makeupskin">Make-Up & Skin Care</option>
                <option value="nails">Nails</option>
            </Form.Select>
            <br></br>
            <InputGroup>
                <Form.Control aria-label="Minutes to do task." value={formData.time} onChange={handleChange} id="time" />
                <InputGroup.Text>min</InputGroup.Text>
                <InputGroup.Text>How long did it take to do when practiced?</InputGroup.Text>
            </InputGroup>
            <InputGroup>
                
                <Form.Control as="textarea" aria-label="Extra Notes on this Video" value={formData.notes} onChange={handleChange} id="notes" />
                <InputGroup.Text>Any extra notes on this video</InputGroup.Text>
            </InputGroup>
            <Button type="submit">Testing</Button>
        </Form> 
        </div>
    )
}

export default AddToDatabaseForm2;