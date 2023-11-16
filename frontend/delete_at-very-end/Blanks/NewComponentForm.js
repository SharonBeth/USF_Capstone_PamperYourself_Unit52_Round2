import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    CarouselCaption   
  } from "reactstrap";
import { render } from "react-dom";

function Change({}) {
  const [Change, setChange] = useState();

  const history = useNavigate();
  const initialState = {username: "", password: "", firstName: "", lastName: "", email: ""};
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
    let res = await externalAPICall("", formData, );
    if(res.success) {
        history('/carousel');
    }else{
        setFormErrors(res.errors);
    }
}
    return(
        <div>
             <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="category">Choose a Category from the Drop Down Menu</Label>
                    <Input
                        //type option "select" is meant for a drop-down menu
                        type="select"
                        //I saw in reactstrap that "name" should equal "select" for a drop down. However, I thought name would effect how the data would process through the handleChange. Keep an eye out for that.
                        name="select"
                        id="category"
                        onChange={handleChange}
                        value={formData.username}
                    >
                      <option>Change1</option>
                      <option>Change2</option>
                      <option>Change3</option>
                    </Input> 
                  
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="text"
                        name="passwoard"
                        id="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                   
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        type="email"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                        placeholder="example@gmail.com"
                    />
                </FormGroup>
                <Button style={{background:"#ed80df"}}>Sign Up</Button>
            </Form>
        </div>
    )
}

export default Change;