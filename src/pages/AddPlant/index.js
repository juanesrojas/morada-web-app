import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const AddPlant =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar nuevo elemento en jerarquía de nivel 2</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                
                <FormControl>
                    <label>Dirección</label>
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

                <FormControl>
                    <label>Área (m2)</label>
                    <div class="input">
                        <input type="number"/>
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


