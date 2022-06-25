import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { CompanyInfoCard } from "../../../../components/CompanyInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";
import { MacroprocessInfoCard } from "../../../../components/MacroprocessInfoCard";
import { SubTitle } from "../../../../globalStyles";
import { ProcessCard } from "../ProcessCard";
import { Button, SquaredButton } from "../../../../components/Button";
import { FaArrowAltCircleRight,FaArrowAltCircleDown} from 'react-icons/fa';
import { EnergeticoInfoCard } from "../../../../components/EnergeticoInfoCard";


export const EnergeticoCard = () =>{
    const [visible, setVisible] = useState(true);

    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible);
        console.log(visible);
    };

return (

        <PropertyCardWrapper>





            <div>
                
                <EnergeticoInfoCard/>
            </div>   
            
                
            
        </PropertyCardWrapper>




    )
}