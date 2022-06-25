import { ShortMenu } from "../../components/ShortMenu";
import { Page } from "../../components/Page";
import { CompanyInfoCard } from "../../components/CompanyInfoCard";
import { PrimaryText, SubTitle,Title } from "../../globalStyles";
import { PropertyImageScrolling } from "./components/PropertyImageScrolling";
import { PropertyOwnerInfo } from "./components/PropertyOwnerInfo";
import { PropertyDetailContainer } from "./styles";
import { PlantCard } from "../Home/components/PlantCard";
import { VariableCard } from "../Home/components/VariableCard";
import { Button } from "../../components/Button";
import { DeviceInfoCard } from "../../components/DeviceInfoCard";





export const DeviceDetail = (PropertyID) =>(

        <Page hideMenu>
            <PropertyDetailContainer>
                <ShortMenu/>


                <DeviceInfoCard/>
                <div>
                    <SubTitle>Equipo:</SubTitle>
                    <PrimaryText>Horno1</PrimaryText>
                </div>

                <div>
                    <SubTitle>Fabricante:</SubTitle>
                    <PrimaryText>cxxx</PrimaryText>
                </div>

                <div>
                    <SubTitle>Referencia:</SubTitle>
                    <PrimaryText>cxxx</PrimaryText>
                </div>
                
            </PropertyDetailContainer>
            <br/>
            <Title>Variables asociadas al equipo</Title>


            <VariableCard/>

            <br/>
            <Button 
                label="Agregar nueva variable" 
                linkTo={"/add-variable"}
            />
             

            
        </Page>
    );

