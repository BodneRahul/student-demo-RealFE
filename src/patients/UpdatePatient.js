import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdatePatient() {

  const {id} = useParams();

  let navigate = useNavigate();

  const [patient, setPatient] = useState({
    patientName: "",
    age: "",
    sex: "",
    disease: "",
    dateOfAdmit: "",
    assignedDoctor: ""
  });

  const { patientName, age, sex, disease, dateOfAdmit, assignedDoctor } = patient;

  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadPatient()
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/patients/${id}`, patient);
      navigate("/patientDetails"); // Navigate to home page after successful submission
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const loadPatient = async()=>{
     const result = await axios.get(`http://localhost:8080/api/patients/${id}`);
     setPatient(result.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Update Patient</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='patientName' className='form-label'>Patient Name</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter Patient Name'
                name='patientName'
                value={patientName}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='age' className='form-label'>Age</label>
              <input
                type={"number"}
                className='form-control'
                placeholder='Enter Age'
                name='age'
                value={age}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='sex' className='form-label'>Sex</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter Sex'
                name='sex'
                value={sex}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='disease' className='form-label'>Disease</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter Disease'
                name='disease'
                value={disease}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='dateOfAdmit' className='form-label'>Date of Admit</label>
              <input
                type={"date"}
                className='form-control'
                name='dateOfAdmit'
                value={dateOfAdmit}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='assignedDoctor' className='form-label'>Assigned Doctor</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter Assigned Doctor'
                name='assignedDoctor'
                value={assignedDoctor}
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
