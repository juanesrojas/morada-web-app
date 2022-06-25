import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const AddProcess =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar un nuevo elemento en jerarquía de nivel 4</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre</label>
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
                    onPress={()=>{alert('Elemento agregado')}}
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


