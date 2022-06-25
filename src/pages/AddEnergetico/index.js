import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const AddEnergetico =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar un nuevo enegético</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Unidad de medida</label>
                    <div class="input">
                        <select >
                            <option value="kWh">kWh</option>
                            <option value="m3">m3</option>
                            <option value="lt">litros</option>
                            <option value="tons">toneladas</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Factor de Emision Co2</label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Factor de Conversión a kWh</label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Línea Base Energética según producción equivalente </label>
                    <br/>
                    <label>Pendiente m </label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                    <br/>
                    <label>Energía Base E0 - Producción equivalente</label>
                    <div class="input">
                        <input type="number"/>
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


