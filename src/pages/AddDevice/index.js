import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const AddDevice =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar un nuevo equipo</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre del equipo</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                
                <FormControl>
                    <label>Fabricante</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Referecia</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                <FormControl>
                    <label>Capacidad nominal</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

             
 
    
                <br/>
                <Button 
                    label="Guardar" 
                    onPress={()=>{alert('Equipo agregado')}}
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


