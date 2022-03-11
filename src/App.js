/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Continent from './component/Continent';
import Country from './component/Details';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/continent/:continent" element={<Continent />} />
      <Route path="/country/:name" element={<Country />} />
    </Routes>
  </Router>
);

export default App;
