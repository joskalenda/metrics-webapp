import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" />
      <Route path="/continent/:continent" />
      <Route path="/country/:name" />
    </Routes>
  </Router>
);

export default App;
