import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const AddProduct =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar un nuevo producto</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre del producto</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                <FormControl>
                    <label>Unidad de Medida</label>
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
                    onPress={()=>{alert('elemento agregado')}}
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


