import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../layouts';

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default Routers;
