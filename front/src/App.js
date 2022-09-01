import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import EmployeeList from './Pages/EmployeeList/EmployeeList';
//import Form from './Pages/Form/Form';
import SubmissionForm from './Pages/Form/SubmissionForm';
import AppraisalForm from './Pages/Form/AppraisalForm';
import store from './store/store';
import { useSelector } from 'react-redux';
import { getUser } from './store/actions/userActions';
import Login from './Pages/Login/Login';
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === false) {
      store.dispatch(getUser());
      console.log('not auth');
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path='/' element={<EmployeeList />} />
      <Route path='/manager/:empId' element={<AppraisalForm />} />
      <Route path='/employee/:submission' element={<SubmissionForm />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path={`${route}/`} element={<JobList route={route} siteurl={siteurl} userId={userId} context={context} />} />
      <Route path={`${route}/create/:id`} element={<NationalIdCheck route={route} context={context} siteurl={siteurl} />} />
      <Route element={<ProtectedRoutes siteurl={siteurl} route={route} context={context} />}>
        <Route path={`${route}/admin/applications`} element={<ApplicationsList route={route} siteurl={siteurl} context={context} />} />
        <Route path={`${route}/admin/create`} element={<CreateJobForm route={route} context={context} siteurl={siteurl} />} />
      </Route> */}
    </Routes>
  );
}

export default App;
