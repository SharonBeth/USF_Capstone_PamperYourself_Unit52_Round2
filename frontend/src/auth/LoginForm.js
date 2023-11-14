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
    Button
  } from "reactstrap";


function LoginForm({register, login}){
    const history = useNavigate();
    const[someValue, setSomeValue] = useState();
    const initialState= {username: "", password: ""}
    const[formData, setFormData] = useState(initialState);
    const[formErrors, setFormErrors] = useState();

    const handleChange = (evt) => {
        const {name, value} =evt.target;
            setFormData(formData=>({
                ...formData,
                [name]:value
            }));
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let res = await login(formData);
        if(res.success) {
            history('/newsearch');
        }else{
            setFormErrors(res.errors);
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="text"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </div>
    )
}

export default LoginForm;