
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import your route components too

import {Home} from './pages/Home';
import { NotFound } from "./pages/NotFound";
import {PropertyDetail} from './pages/PropertyDetail';
import {Account} from './pages/Account';
import {Favorites} from './pages/Favorites';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import {AddProperty} from './pages/AddProperty'
import {MyProperties} from './pages/MyProperties'
import { useContext, useEffect } from "react";
import { getToken } from "./utils/TokenLS";
import { UserContext } from "./contexts/UserContext";
import { HTTP_VERBS, requestHttp } from "./utils/HttpRequest";


export const Navigation= () =>{
    
    const {user,setUser} = useContext(UserContext);

    const location = useLocation();
    
    useEffect(()=>{
        checkUserAuthenticated();

    },[location]);



    const checkUserAuthenticated = () =>{
        const token = getToken();
        if (token && !user.isAuthenticated) {
            //autologin: obtener los datos del usuario
            requestGetUserInfo(token);
        }
    };

    const requestGetUserInfo = async (token) =>{
        try{
            const response = await requestHttp({
                method:HTTP_VERBS.GET,
                endpoint: '/users/info',
                token
            });
            const {data} = response;
            setUser({
                name:data.user.name,
                phone:data.user.phone,
                role:data.user.role,
                identification:data.user.document,
                email:data.user.email,
                isAuthenticated:true
            });
        } catch (error){
            console.log("error", error)
        }
    }


    return (

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/properties/:propertyId' element={<PropertyDetail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/add-property' element={<AddProperty/>}/>
            <Route path='/my-properties' element={<MyProperties/>}/>

            <Route path='*' element={<NotFound/>}/>
        </Routes>
  
    


    ); 
};