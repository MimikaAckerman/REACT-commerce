import React from 'react';
import './App.css';
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes/AppRoutes';
import Navbar from './Views/Layout/Navbar/Navbar';


import StoreItems from './Views/Components/StoreContainer/StoreItems';

function App()  {



  
  return (
<>

<BrowserRouter>
<Navbar/>
<AppRoutes/>
<StoreItems/>

</BrowserRouter>


</>
  );
}

export default App;
