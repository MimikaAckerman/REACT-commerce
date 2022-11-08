import React from 'react';
import './App.css';


import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import Navbar from './Components/Navbar/Navbar';






function App()  {



  return (
<>

<Navbar/>




<div className='pages'>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Store' element={<Store/>}/>
    <Route path='/About' element={<About/>}/>
</Routes >
</div>



</>
  );
}

export default App;
