import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col
} from "reactstrap";

function SearchForm ({rejectList, externalAPICall, videos, dislikeIds}) {
  const history = useNavigate();
  const initialState = {category: "", q: "", qExclude : "", reject: rejectList};
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
  }, [dislikeIds])

  useEffect(()=>{
  }, [formData])
  
  const handleChange = (evt) => {
    const {name, value} = evt.target;
        setFormData(formData=>({
            ...formData,
            [name]:value
    }));
  }
const handleSubmit = async (evt) => {
    evt.preventDefault();
    let call = await externalAPICall(formData);
    if(call.success) {
      console.log("call-success")
      history('/carousel');
    }else{
        setFormErrors(call.errors);
    }
  }

  return(
    <div>
      <Col sm={{size: 6, offset: 3}}>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="category">Choose a Category from the Drop Down Menu</Label>
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
              <option>Skin Care</option>
            </Input>
          <Label htmlFor="q">Include the following for searching</Label>
            <Input
              type="text"
              name="q"
              id="q"
              onChange={handleChange}
              value={formData.q}
              placeholder="Suggestions...Braids, Press-On Nails, smokey-eye make-up"
              />
          <Label htmlFor="qExclude">This will exclude things from our search.</Label>
            <Input
              type="text"
              name="qExclude"
              id="qExclude"
              onChange={handleChange}
              value={formData.qExclude}
              placeholder="This one is okay to leave blank"
            />
        </FormGroup>
        <Button style={{background:"#ed80df"}}>Pampering Yourself Begins Here</Button>
        </Form>
      </Col>
    </div>
  )
}

export default SearchForm;