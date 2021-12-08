import React from 'react';
import { routes } from 'appConstants';
import { Route, Routes } from 'react-router-dom';
import { CreateContract } from 'pages/CreateContract';
import { CustomDevelopment } from 'pages/CustomDevelopment';

const RoutesContainer = () => (
  <Routes>
    <Route path={routes.main.root} element={<CreateContract />} />
    <Route path={routes.myContracts.root} element={<div>myContracts</div>} />
    <Route path={routes.customDevelopment.root} element={<CustomDevelopment />} />
  </Routes>
);

export default RoutesContainer;
