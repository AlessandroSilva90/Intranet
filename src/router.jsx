import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import MainPage from './Pages/MainPg/MainPg';

const Roteador = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage/>} />
      </Routes>
    </Router>
  );
};

export default Roteador;