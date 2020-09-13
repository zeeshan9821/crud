import React, { useState,useEffect, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const { addUser } = useContext(GlobalContext);
  let history = useHistory();

  

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      date
    }
    addUser(newUser);
    history.push("/");
  }


  
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Enter user" required></Input>
        <br></br>
        <Label>Date</Label>
        <Input type="date" value={date} onChange={e => setDate(e.target.value)} name="date" placeholder="Enter Date" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
