import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';
import { MenuConfig } from "../../components/MenuConfig";
import { CompanyCard } from "../Home/components/CompanyCard";

export const EditCompanies =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
            <MenuConfig/>
            <br/>
            <Title>Empresas actuales</Title>
            
       
            <CompanyCard companyName={"Panadería X"} nit={"800.000.455.454"}/>
            <CompanyCard companyName={"Lácteos ABC"} nit={"901.000.554.454"}/>

            <br/>


            <Button 
                label="Crear nueva Empresa" 
                linkTo={"/add-company"}
            />

           
        </Page>
    
    )

}


