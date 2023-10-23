import './index.css';
import React from "react";

import Joblist from './components/joblist';
import Location from './components/location';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';

import Home from './pages/home';
import Login from './pages/login/';
import Register from './pages/register'




/* Pour importer les roots depuis main() */

import {Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Routes>
    
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/joblist" element={<Joblist />} />
      <Route path="/location" element={<Location />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/searchbar" element={<Searchbar />} />

      
  
    </Routes>
  </>
  );
};

export default App;