import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';
import { MenuConfig } from "../../components/MenuConfig";

export const AddCompany =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
            <MenuConfig/>
    
            <Title>Agregar una nueva empresa</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre de la empresa</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                
                <FormControl>
                    <label>Dirección Principal</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Nit</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Departamento</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                <FormControl>
                    <label>Ciudad</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Descripción</label>
                    <div class="input">                        
                        <textarea rows = "5" cols = "60" name = "description" placeholder="Enter text">
                          
                        </textarea>
                    </div>
                </FormControl>

                      
 
    
                <br/>
                <Button 
                    label="Guardar" 
                    onPress={()=>{alert('Se creó la empresa')}}
                />
    

    
    
            </form>
    
            
        </Page>
    
    )

}


