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




export const PropertyDetail = () =>{

    const {propertyId} = useParams();
    const [property, setProperty] = useState({title:"",propertyType:{id:0, label:"null"},businessType:{id:0, label:"null"}});
    
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

        <Page>
            <PropertyDetailContainer>
                <ShortMenu/>
                <PropertyImageScrolling/>
                <PropertyInfoCard {...property}/>
  
                <div>
                    <SubTitle>Description:</SubTitle>

                    <PrimaryText>{property.description}</PrimaryText>
 
                    
                </div>
  
                <PropertyOwnerInfo  userName={"Juan Rojas"} userPicture={require("./components/PropertyOwnerInfo/images/profile_picture.png")} />
            </PropertyDetailContainer>
            
        </Page>
    );

}