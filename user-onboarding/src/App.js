import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form';

const initialFormValues = {
  username: '', 
  password: '',
  email: '',
  checked: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleSubmit = () =>{
     
  }
  const handleChange = (name,value) => {
    setFormValues({...formValues, [name]: value})
  }


  return (
    <div className="App">
      <h1>Advanced Forms Day!</h1>
      <Form values={formValues}/>
    </div>
  );
}

export default App;
