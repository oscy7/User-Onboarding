import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form';
import formSchema from './validation/formSchema';

const initialFormValues = {
  username: '', 
  password: '',
  email: '',
  tos: false
}
const initialFormErrors = {
  username: '', 
  password: '',
  email: '',
  tos: ''
}

function App() {
  //::::
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors,setFormErrors] = useState(initialFormErrors)
  const [hero, setHero] = useState([]);
  //::::
  const handleSubmit = () =>{
     axios.post(`https://reqres.in/api/users`, formValues)
      .then(resp => {
        console.log(resp);
        setHero([resp.data, ...hero])
      })
      .catch(err=> console.error(err))
  }
  //::::
  const handleChange = (name,value) => {
    validate(name,value)
    setFormValues({...formValues, [name]: value})
    
  }
  //::::
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err=>setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  //::::


  return (
    <div className="App">
      <h1>Advanced Forms Day!</h1>
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
    </div>
  );
}

export default App;
