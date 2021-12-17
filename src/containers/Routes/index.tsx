import React from 'react';
import { routes } from 'appConstants';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  CreateContract, CustomDevelopment, TokenContract, CrowdsaleContract,
} from 'pages';

const RoutesContainer = () => (
  <Routes>
    <Route path={routes.root} element={<CreateContract />} />
    <Route path={routes['token-contract'].root} element={<TokenContract />} />
    <Route path={routes['my-contracts'].root} element={<div>myContracts</div>} />
    <Route path={routes['custom-development'].root} element={<CustomDevelopment />} />
    <Route path="/" element={<Navigate replace to={routes.root} />} />
  </Routes>
);

export default RoutesContainer;
