import React from 'react';
import './App.css';


import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes/AppRoutes';
import Navbar from './Views/Layout/Navbar/Navbar';

import { ShopProvider } from './Views/Components/ShopContext/shopContext';


function App()  {



  
  return (
<>

<BrowserRouter>
<ShopProvider>
<Navbar/>
<AppRoutes/>
</ShopProvider>

</BrowserRouter>


</>
  );
}

export default App;
