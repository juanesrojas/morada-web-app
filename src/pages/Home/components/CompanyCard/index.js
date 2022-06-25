
import { CompanyInfoCard } from "../../../../components/CompanyInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";



export const CompanyCard = ({companyName, nit}) =>(

        <PropertyCardWrapper>
           
                
            <CompanyInfoCard companyName={companyName} nit={nit}/>
    
        </PropertyCardWrapper>




)