
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

import {Home} from './pages/Home';
import { NotFound } from "./pages/NotFound";
import {PropertyDetail} from './pages/PropertyDetail';
import {Account} from './pages/Account';
import {Favorites} from './pages/Favorites';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';

export const Navigation= () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/propertydetail' element={<PropertyDetail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
  
    
    </BrowserRouter>

); 