import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Simplified import
import Navbar from './layout/Navbar';
import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import UpdateUser from './users/UpdateUser';
import ViewUser from './users/ViewUser';
import PatientDetail from './patients/PatientDetail';
import AddPatient from './patients/AddPatient';
import UpdatePatient from './patients/UpdatePatient';
import ViewPatient from './patients/ViewPatient';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {/* User Routes */}
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/addUser" element={<AddUser/>}></Route>
          <Route exact path="/updateUser/:id" element={<UpdateUser />} />
          <Route exact path="/viewUser/:id" element={<ViewUser />} />

          {/* Patient Routes */}
          <Route exact path="/patientDetails" element={<PatientDetail />} />
          <Route exact path="/addPatient" element={<AddPatient />} />
          <Route exact path="/updatePatient/:id" element={<UpdatePatient />} />
          <Route exact path="/viewPatient/:id" element={<ViewPatient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
