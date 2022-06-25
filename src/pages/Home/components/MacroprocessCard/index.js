import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { CompanyInfoCard } from "../../../../components/CompanyInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";
import { MacroprocessInfoCard } from "../../../../components/MacroprocessInfoCard";
import { SubTitle } from "../../../../globalStyles";
import { ProcessCard } from "../ProcessCard";
import { Button, SquaredButton } from "../../../../components/Button";
import { FaArrowAltCircleRight,FaArrowAltCircleDown} from 'react-icons/fa';


export const MacroprocessCard = ({nombre}) =>{
    const [visible, setVisible] = useState(true);

    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible);
        console.log(visible);
    };

return (

        <PropertyCardWrapper>





            <div>
                <MacroprocessInfoCard nombre={nombre}/>
            </div>   
            <br/>
            <div>
                <div class="jerarquia_visible">
                    <SubTitle>Jerarquía nivel 4:</SubTitle>                               
                    <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                        <SquaredButton icon={!visible ? FaArrowAltCircleRight:FaArrowAltCircleDown} color={"#4A148C"}  link="" funct={tooglePasswordVisible}/>
                    </div>
                </div>

                <br/>
                {!visible  && <ProcessCard/>}
                {!visible  && <ProcessCard/>}
     

                <br/>
                {!visible  && 
                <Button
                label="Crear nueva elemento en Jerarquía Nivel 4" 
                linkTo={"/add-process"}
                />}
            </div>
        </PropertyCardWrapper>




    )
}