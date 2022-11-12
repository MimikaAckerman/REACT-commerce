import React from 'react';
import './App.css';


import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes/AppRoutes';
import Navbar from './Views/Layout/Navbar/Navbar';
import ProductCart from './Views/Components/ProductCard/ProductCart';


import { ShopProvider } from './Views/Components/ShopContext/shopContext';
import Cart from './Views/Components/Cart/Cart';

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
