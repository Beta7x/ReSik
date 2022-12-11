import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../layouts';
import LandingPage from '../layouts/LandingPage';
import Login from '../layouts/Login';
import Register from '../layouts/Register';

function Routers() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
    </Routes>
  );
}

export default Routers;
