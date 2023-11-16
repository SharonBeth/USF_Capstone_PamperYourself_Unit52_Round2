import React, {useState} from "react";
import {Redirect, useNavigate} from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col,
    Row 
  } from "reactstrap";


function SignUpForm({register}){
    const history = useNavigate();
    const initialState= {username: "", password: "", firstName: "", lastName: "", email: ""};
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState([]);

    const handleChange = (evt) => {
        const {name, value} =evt.target;
            setFormData(formData=>({
                ...formData,
                [name]:value
            }));
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let res = await register(formData);
        if(res.success) {
            history('/login');
        }else{
            setFormErrors(res.errors);
        }
    }

    return (
        <div>
            <h1>Sign Up to Pamper Yourself</h1>
            <Col sm={{
                            size: 4,
                            offset: 4
                        }}>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username"></Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                        placeholder="Username"
                    />
               
              
                    <Label htmlFor="password"></Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder="Password"
                    />
                
                    <Label htmlFor="firstName"></Label>
                    <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                        placeholder="First Name"
                    />
                    <Label htmlFor="lastName"></Label>
                    <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                        placeholder="Last Name"
                    />
                    <Label htmlFor="email"></Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="example@gmail.com"
                    />
                    </FormGroup>
                <Button style={{background:"#ed80df"}}>Sign Up</Button>
            </Form>
            </Col>
        </div>
    )
}

export default SignUpForm;