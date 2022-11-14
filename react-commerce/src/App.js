import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes/AppRoutes';
import Navbar from './Views/Layout/Navbar/Navbar';
import Register from './Views/Components/Form/Register';



function App()  {


  return (
<>

<BrowserRouter>
<Navbar/>
<AppRoutes/>

<Register/>

</BrowserRouter>


</>
  );
}

export default App;
