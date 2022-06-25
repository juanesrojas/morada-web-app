import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { PlantInfoCard } from "../../../../components/PlantInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";
import { SubTitle } from "../../../../globalStyles";
import { CompanyCard } from "../CompanyCard";
import { MacroprocessCard } from "../MacroprocessCard";
import { Button, SquaredButton } from "../../../../components/Button";
import { FaArrowAltCircleDown,FaArrowAltCircleRight} from 'react-icons/fa';
import { EnergeticoCard } from "../EnergeticoCard";
import { ProductsCard } from "../ProductsCard";


export const PlantCard = ({nombre}) =>{
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [visible3, setVisible3] = useState(true);

    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible);
        console.log(visible);
    };

    
    const tooglePasswordVisible2 = () =>{
        //setVisible((visible) => !visible);
        setVisible2(!visible2);
        console.log(visible2);
    };

    const tooglePasswordVisible3 = () =>{
        //setVisible((visible) => !visible);
        setVisible3(!visible3);
        console.log(visible3);
    };

return (

        <PropertyCardWrapper>
           
            <div>
                <PlantInfoCard nombre ={nombre}/>
            </div>   
            
            <div>
            <div class="jerarquia_visible">
                <SubTitle>Jerarquía nivel 3:</SubTitle>                               
                <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                    <SquaredButton icon={!visible ? FaArrowAltCircleRight:FaArrowAltCircleDown} color={"#4A148C"}  link="" funct={tooglePasswordVisible}/>
                </div>
            </div>

                
                {!visible  && <MacroprocessCard nombre="Macroproceso 1"/>}
                {!visible  && <MacroprocessCard nombre="Macroproceso 2" />}
                {!visible  && <MacroprocessCard nombre="Macroproceso 3"/>}
                <br/>
                
                {!visible  && <Button
                label="Crear nueva elemento en Jerarquía Nivel 3" 
                linkTo={"/add-macroprocess"}
                />}

            </div>

            <div>   
            <br/>
            <div class="jerarquia_visible">
                <SubTitle>Energéticos asociados a la jerarquia de nivel 2:</SubTitle>                               
                <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                    <SquaredButton icon={!visible2 ? FaArrowAltCircleRight:FaArrowAltCircleDown} color={"#4A148C"}  link="" funct={tooglePasswordVisible2}/>
                </div>
            </div>

                
                {!visible2  && <EnergeticoCard/>}
                {!visible2  && <EnergeticoCard/>}

                <br/>
                
                {!visible2  && <Button
                label="Crear nuevo enegético" 
                linkTo={"/add-energetico"}
                />}

            </div>

            <div>   
            <br/>
            <div class="jerarquia_visible">
                <SubTitle>Productos de la planta:</SubTitle>                               
                <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                    <SquaredButton icon={!visible3 ? FaArrowAltCircleRight:FaArrowAltCircleDown} color={"#4A148C"}  link="" funct={tooglePasswordVisible3}/>
                </div>
            </div>

                
                {!visible3  && <ProductsCard/>}
                {!visible3  && <ProductsCard/>}

                <br/>
                
                {!visible3  && <Button
                label="Crear nuevo producto" 
                linkTo={"/add-product"}
                />}

            </div>

          
        </PropertyCardWrapper>




    );
};