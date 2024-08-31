import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';

export default function PatientDetail() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8080/api/patients");
    setPatients(result.data);
  };

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/api/patients/${id}`);
    loadPatients();
  };

  return (
    <div className='container'>
      <div className='py-6'>
        <table className='col-md-12 offset border rounded p-8 mt-8 shadow'>
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">PatientName</th>
              <th scope="col">Age</th>
              <th scope="col">Sex</th>
              <th scope="col">Disease</th>
              <th scope="col">Date of Admit</th>
              <th scope="col">Assigned Doctor</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{patient.patientName}</td>
                <td>{patient.age}</td>
                <td>{patient.sex}</td>
                <td>{patient.disease}</td>
                <td>{formatDate(patient.dateOfAdmit)}</td> 
                <td>{patient.assignedDoctor}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewPatient/${patient.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/updatePatient/${patient.id}`}>
                    Update
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deletePatient(patient.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
