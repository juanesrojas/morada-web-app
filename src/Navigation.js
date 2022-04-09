
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

import {Home} from './pages/Home';
import { NotFound } from "./pages/NotFound";
import {PropertyDetail} from './pages/PropertyDetail';

export const Navigation= () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/propertydetail' element={<PropertyDetail/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
  
    
    </BrowserRouter>

); 