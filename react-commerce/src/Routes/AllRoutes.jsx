import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {AppRoutes} from './AppRoutes'
import Home from '../Views/Pages/Home'
import ProductContainer from '../Views/Components/ProductContainer/ProductContainer'
import About from '../Views/Pages/About'



import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'


const AllRoutes = () => {

    return(

<>
<Routes>

<Route path='/'
element={
    <PublicRoutes>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Store' element={<ProductContainer/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
    </PublicRoutes>
}
/>

<Route path='/' element={
    <PrivateRoutes>
        <AppRoutes/>
    </PrivateRoutes>
}>

</Route>


</Routes>

</>


    );

}





export default AllRoutes