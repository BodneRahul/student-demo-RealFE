import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDate } from '../utils/dateUtils';

export default function ViewPatient() {
  const [patient, setPatient] = useState({
    patientName: "",
    age: "",
    sex: "",
    disease: "",
    dateOfAdmit: "",
    assignedDoctor: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8080/api/patients/${id}`);
    setPatient(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Patient Details</h2>
          <div className='card'>
            <div className='card-header'>
              Details of Patient ID: {id}
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>Patient Name:</b> {patient.patientName}
                </li>
                <li className='list-group-item'>
                  <b>Age:</b> {patient.age}
                </li>
                <li className='list-group-item'>
                  <b>Sex:</b> {patient.sex}
                </li>
                <li className='list-group-item'>
                  <b>Disease:</b> {patient.disease}
                </li>
                <li className='list-group-item'>
                <b>Date of Admit:</b> {formatDate(patient.dateOfAdmit)} 
                </li>
                <li className='list-group-item'>
                  <b>Assigned Doctor:</b> {patient.assignedDoctor}
                </li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
