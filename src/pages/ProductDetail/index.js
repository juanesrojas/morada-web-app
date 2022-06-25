import { ShortMenu } from "../../components/ShortMenu";
import { Page } from "../../components/Page";
import { CompanyInfoCard } from "../../components/CompanyInfoCard";
import { FormControl, PrimaryText, SubTitle,Title } from "../../globalStyles";
import { PropertyImageScrolling } from "./components/PropertyImageScrolling";
import { PropertyOwnerInfo } from "./components/PropertyOwnerInfo";
import { PropertyDetailContainer } from "./styles";
import { PlantCard } from "../Home/components/PlantCard";
import { VariableCard } from "../Home/components/VariableCard";
import { Button } from "../../components/Button";
import { DeviceInfoCard } from "../../components/DeviceInfoCard";





export const ProductDetail = (PropertyID) =>(

        <Page hideMenu>
            <PropertyDetailContainer>
                <ShortMenu/>


           
                <div>
                    <SubTitle>Producto:</SubTitle>
                    <PrimaryText>Abc</PrimaryText>
                </div>

                <div>
                    <SubTitle>Unidad de Medida:</SubTitle>
                    <PrimaryText>Kg</PrimaryText>
                </div>

                

                
            </PropertyDetailContainer>
            <br/>
            <Title>Factores multiplicadores para producción equivalente</Title>


            <form>
    
                <FormControl>
                    <label>Factor multiplicador energético 1</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <br/>

              
    

    
                <br/>
                <Button 
                    label="Guardar" 
                    onPress={()=>{alert('Variableagregada')}}
                />
    
    
    
            </form>

            <form>
    
                        <br/>

                <FormControl>
                    <label>Factor multiplicador energético n</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    

    
                <br/>
                <Button 
                    label="Guardar" 
                    onPress={()=>{alert('Variableagregada')}}
                />
    
    
    
            </form>




             

            
        </Page>
    );

