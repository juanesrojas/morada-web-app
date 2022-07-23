import { useState, useEffect } from "react";
import { ShortMenu } from "../../components/ShortMenu";
import { Page } from "../../components/Page";
import { PropertyInfoCard } from "../../components/PropertyInfoCard";
import { PrimaryText, SubTitle } from "../../globalStyles";
import { PropertyImageScrolling } from "./components/PropertyImageScrolling";
import { PropertyOwnerInfo } from "./components/PropertyOwnerInfo";
import { PropertyDetailContainer } from "./styles";
import { useParams } from "react-router-dom";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";



export const PropertyDetail = () =>{

    const {propertyId} = useParams();
    const [property, setProperty] = useState({title:"",propertyType:{id:0, label:"null"},businessType:{id:0, label:"null"}});
    //const [property, setProperty] = useState({});
    const {user, setUser} = useContext(UserContext);
    
    useEffect(()=>{
        //acciones a ejecutar
        propertyRequest(propertyId);  

    }, []);

    const propertyRequest = async (propertyId) =>{
            
        try{ 
         
         
            const response = await requestHttp(
                {
                    method:HTTP_VERBS.GET,
                    endpoint:`/properties/${propertyId}`
                    
                }
            );
           // const {checkProperties} = response.data;
           setProperty(response.data.uniqueCheckProperty);
            console.log('respuesta xxx:',property);
            //return checkProperties;   


        }catch (error){
            console.log('error',error);           
        }
    }
    
    return (

        <Page userProfile={user.role}>
            <PropertyDetailContainer>
                <ShortMenu/>
                <PropertyImageScrolling image={property.mainImage}/>
                <PropertyInfoCard {...property}/>
  
                <div>
                    <SubTitle>Description:</SubTitle>

                    <PrimaryText>{property.description}</PrimaryText>
 
                    
                </div>
                {   user.isAuthenticated?
                    <PropertyOwnerInfo  userName={"Juan Rojas"} userPicture={require("./components/PropertyOwnerInfo/images/profile_picture.png")} /> :<p>Inicia sesión para ponerte en contacto con el propietario, has click <a href="/login">aquí</a></p>
                }
                
            </PropertyDetailContainer>
            
        </Page>
    );

}