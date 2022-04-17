
import { PropertyBusinessType } from "../PropertyBusinessType";
import { PropertyTypeLabel } from "../PropertyTypeLabel";
import { PropertyInfoWrapper } from "./styles";
import { FaHandshake,FaBuilding } from 'react-icons/fa';
import { Title, SubTitle, SecundaryText } from "../../globalStyles";


export const PropertyInfoCard = (PropertyID) =>(

        <PropertyInfoWrapper>
            <SubTitle>Apartamento en Laureles</SubTitle>
            <SecundaryText>Laureles, Medellín</SecundaryText>
            <PropertyTypeLabel icon={FaBuilding} typeId={"Apartamento"} />
            <PropertyBusinessType icon={FaHandshake} typeId={"Venta"}/>
            <Title>$400.000.000</Title>
        </PropertyInfoWrapper>




    







)