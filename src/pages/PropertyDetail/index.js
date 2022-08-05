import { useState, useEffect } from "react";
import { ShortMenu } from "../../components/ShortMenu";
import { Page } from "../../components/Page";
import { PropertyInfoCard } from "../../components/PropertyInfoCard";
import { PrimaryText, SubTitle, Title } from "../../globalStyles";
import { PropertyImageScrolling } from "./components/PropertyImageScrolling";
import { PropertyOwnerInfo } from "./components/PropertyOwnerInfo";
import { PropertyDetailContainer } from "./styles";
import { useParams } from "react-router-dom";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { SquaredButton } from "../../components/Button";
import { FaStar } from 'react-icons/fa';
import { showAlert , closeSwal, SW_ICON} from "../../utils/SwAlert";
import Swal from 'sweetalert2';


export const PropertyDetail = () =>{

    const {propertyId} = useParams();
    //const [property, setProperty] = useState({title:"",propertyType:{id:0, label:"null"},businessType:{id:0, label:"null"}});
    const [property, setProperty] = useState(null);
    //const [property, setProperty] = useState({});
    const {user, setUser} = useContext(UserContext);
    
    useEffect(()=>{
        //acciones a ejecutar
        setTimeout(()=>{
            propertyRequest(propertyId); 
        },2000);         

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
            console.log('respuesta:',property);
            //return checkProperties;   


        }catch (error){
            console.log('error',error);           
        }
    }

    const addToFavorites = async (propertyId) =>{
        showAlert('Felicidades!',"estamos añadiendo esta propiedad a tu lista de favoritos", SW_ICON.SUCCESS,"","Ok",false,"",()=>{});
        Swal.showLoading();
        try{         
            
            const response = await requestHttp(
                {
                    method:HTTP_VERBS.POST,
                    endpoint:`/favorites/`,
                    body:{propertyId:propertyId}
                    
                }
            );
            closeSwal();
            showAlert('Felicidades!',"Se ha añadido esta propiedad a tu lista de favoritos", SW_ICON.SUCCESS,"","Ok",false,"",()=>{});
            
        }catch (error){
            console.log('error',error.response.data);     
            closeSwal();     
            showAlert('Ups!',error.response.data, SW_ICON.ERROR,"","Ok",false,"",()=>{});
        }
    }

    if (!property) {
        return <p>cargando...</p>
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
                    <div>
                        <br/>
                        <Title>¿Te gustó esta propiedad? </Title>
                        <SubTitle>Contacta al propietario:</SubTitle>
                        <br/>
                        <PropertyOwnerInfo  userName={"Juan Rojas"} userPicture={require("./components/PropertyOwnerInfo/images/profile_picture.png")} /> 
                        <br/>
                        <Title>Que no se te escape esta oportunidad </Title>
                        <SubTitle>Añade esta propiedad a tus favoritos</SubTitle>
                        <SquaredButton icon={FaStar} link="" funct={()=>{addToFavorites(propertyId)}} primaryColor={"white"} primaryBackgroundColor={"green"} hoverColor={"white"} hoverBackgroundColor={"orange"}/>
                   
                    </div>
                    
                    :
                    <div>
                        <br/>
                        <Title>¿Te gustó esta propiedad?</Title>
                        <br/>
                        <PrimaryText>Inicia sesión para ponerte en contacto con el propietario, has click <a href="/login">aquí</a></PrimaryText>
                    </div>

                    
                }
                
            </PropertyDetailContainer>
            
        </Page>
    );

}