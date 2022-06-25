import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { CompanyInfoCard } from "../../../../components/CompanyInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";
import { MacroprocessInfoCard } from "../../../../components/MacroprocessInfoCard";
import { SubTitle } from "../../../../globalStyles";
import { ProcessInfoCard } from "../../../../components/ProcessInfoCard";
import { DeviceCard } from "../DeviceCard";
import { Button, SquaredButton } from "../../../../components/Button";
import {FaArrowAltCircleRight,FaArrowAltCircleDown} from 'react-icons/fa';


export const ProcessCard = () =>{
    const [visible, setVisible] = useState(true);

    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible);
        console.log(visible);
    };

return (

        <PropertyCardWrapper>





            <div>
                <ProcessInfoCard/>
            </div>   
            <br/>
            <div>

                <div class="jerarquia_visible">
                    <SubTitle>Equipos asociados al proceso:</SubTitle>                               
                    <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                        <SquaredButton icon={!visible ? FaArrowAltCircleRight:FaArrowAltCircleDown} color={"#4A148C"}  link="" funct={tooglePasswordVisible}/>
                    </div>
                </div>

                <br/>
                {!visible  && <DeviceCard/>}
                {!visible  && <DeviceCard/>}
         

                <br/>
                {!visible  && 
                <Button
                label="Configurar nuevo equipo" 
                linkTo={"/add-device"}
                />}
            </div>
        </PropertyCardWrapper>




    )
}