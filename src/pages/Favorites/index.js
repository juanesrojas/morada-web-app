import { useState, useEffect,useContext } from "react";
import { PropertyTypeBtn } from "../Home/components/PropertyTypeBtn";
import { UserHomeInfo } from "../Home/components/UserHomeInfo";
import { PropertyTypesContainer } from "../Home/styles";
import { FaBuilding,FaIndustry,FaHouseUser,FaWarehouse,  FaTree,  FaTractor } from 'react-icons/fa';
import { HomeMessage } from "../Home/components/MessageBox";
import { PropertyCard } from "../Home/components/PropertyCard";
import { Page } from "../../components/Page";
import { SampleContext } from "../../contexts/SampleContext";
import { UserContext } from "../../contexts/UserContext";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { useLocation } from "react-router-dom";


const ALL_PROPERTIES_TYPES = 0;


export const PropertyTypes = [
    {id:1, icon: FaBuilding, label:'Apartamentos'},
    {id:2, icon: FaHouseUser, label:'Casas'},
    {id:3, icon: FaTree, label:'Lotes'},
    {id:4, icon: FaIndustry, label:'Bodegas'},
    {id:5, icon: FaWarehouse, label:'Locales'},
    {id:6, icon: FaTractor, label:'Fincas'}

];



export const Favorites = () => {

    const [selectedPropertyType, setSelectedProperty] = useState(ALL_PROPERTIES_TYPES);
    const {user,setUser} = useContext(UserContext);
    const [properties, setProperties] = useState([]);


    const propertyTypeHandler = (propTypeID) =>{
       //(selectedPropertyType === propTypeID) ? setSelectedProperty(ALL_PROPERTIES_TYPES) : setSelectedProperty(propTypeID);
       setSelectedProperty(selectedPropertyType === propTypeID ? ALL_PROPERTIES_TYPES:propTypeID);


    };

    useEffect(()=>{
        //acciones a ejecutar
        propertiesRequest();  
        console.log(properties);  

    }, [selectedPropertyType]);


/*
    useEffect(()=>{

        async function makePropertiesRequest() {
          
            console.log('validando propiedades...');

            setProperties(await propertiesRequest());
            console.log('propiedades encontradas 123:',propiedades);

        }
        makePropertiesRequest();

    }, []) */

    const propertiesRequest = async () =>{
            
        try{ 
            
            const response = await requestHttp(
                {
                    method:HTTP_VERBS.GET,
                    endpoint:'/favorites',
                    params:makePropertiesFilter()
                }
            );
           console.log("respuesta: ",response);
            setProperties(response.data.checkFavorites);



        }catch (error){
            console.log('error',error);           
        }
    }

    const makePropertiesFilter = () =>{
        const filters = {};    
        if(selectedPropertyType!==ALL_PROPERTIES_TYPES){
            filters['propertyType']=selectedPropertyType
        };
        filters['ownerId']="62abf81c4785b2acb310a03b";
        return filters;
    }
    

    return(

        <Page userProfile={user.role}>

            

            <UserHomeInfo userName={user.name} userPicture={require("../Home/components/UserHomeInfo/images/profile_picture.png")}/>
            <HomeMessage/>

            <PropertyTypesContainer>
                
                {//código jsx
                    PropertyTypes.map((item,key) => 
                        <PropertyTypeBtn 
                            icon={item.icon} 
                            label={item.label} 
                            id={item.id}
                            selected ={selectedPropertyType === item.id} 
                            onPress={ propertyTypeHandler} 
                            key={key}
                        /> )
                        
                }



            </PropertyTypesContainer>



                <div>
                    {

                    properties? 
                    properties.map((item,key) => //key viene como una propiedad del mapeo, no usarle puede arrojar alertas
                        
                            <PropertyCard key={key} {...item}/>) : <p>sin propiedades</p>
                            
                    }

    

                </div>

            
            

        </Page>
        
    )


}