
import { PropertyBusinessType } from "../PropertyBusinessType";
import { PropertyTypeLabel } from "../PropertyTypeLabel";
import { PropertyInfoWrapper } from "./styles";
import { FaHandshake,FaBuilding } from 'react-icons/fa';

import { Title, SubTitle, SecondaryText } from "../../globalStyles";
import { PropertyTypes } from "../../pages/Home";
import { getBusinessTypeLabel, getCityZoneLabel, getPropertyTypeLabel } from "../../utils/GetDataConstants";
import { getcurrencyFormat } from "../../utils/CurrencyFormat";




export const PropertyInfoCard = (property) =>(

        <PropertyInfoWrapper>
            <SubTitle>{property.title}</SubTitle>
            <SecondaryText>{property.zoneName}, {property.cityName}</SecondaryText>   
            
            <PropertyTypeLabel icon={FaBuilding} type={property.propertyType.label} />
            <PropertyBusinessType icon={FaHandshake} typeId={property.businessType.label}/>

               

            

            <Title>  {getcurrencyFormat(property.value)}</Title>


        </PropertyInfoWrapper>




    







)