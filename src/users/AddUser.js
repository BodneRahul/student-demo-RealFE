import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate = useNavigate();

  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  
  const { firstName, lastName, email } = user;

  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/employees", user);
      navigate("/"); // Navigate to home page after successful submission
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Users</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='firstName' className='form-label'>First Name</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter Your First Name'
                name='firstName'
                value={firstName}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label'>Last Name</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter Your Last Name'
                name='lastName'
                value={lastName}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter Your Email Address'
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <button type="button" className="btn btn-outline-danger mx-2" onClick={() => navigate('/')}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}
