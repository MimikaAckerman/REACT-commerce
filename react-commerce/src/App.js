import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes/AppRoutes';
import Navbar from './Views/Layout/Navbar/Navbar';

function App()  {

  
  return (
<>

<BrowserRouter>
<Navbar/>
<AppRoutes/>

</BrowserRouter>


</>
  );
}

export default App;
