import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Compoments/NavBar';
import Error from './pages/Error';
import Profil from './Compoments/Profil';
import BackGround from './Compoments/BackGround';


function App() {


  return (
    <div>
      
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/error' element={<Error />} />
        <Route path='/Profil' element={<Profil />} />
      </Routes>
      <BackGround/>
    </div>
  );
}

export default App;
