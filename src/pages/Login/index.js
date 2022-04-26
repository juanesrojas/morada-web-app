import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const Login =()=>{
    const [visible, setVisible] = useState(false);

    return (

        <Page hideMenu>
            <ShortMenu/>
            <Title>Iniciar Sesión</Title>
            <br/>
            <form>

                <FormControl>
                    <label>Correo electrónico</label>
                    <div class="input">
                        <input type="email"/>
                    </div>
                </FormControl>


                <FormControl>
                    <div class="pswWrapper">                       
                        <div class="pswContainer" >
                            <label>Contraseña</label>
                            <div class="input">
                                {
                                !visible ? (<input type="password"/>  )
                                    : (<input type="text"/>)
                                }
                                
                            </div>               
                        </div>
                        <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                            <SquaredButton icon={!visible ? FaEyeSlash:FaEye} color={"#4A148C"}  link="" back={() =>{ setVisible((visible) => !visible)}}/>
                        </div>
                        
                    </div>                   
                </FormControl> 
                            


           

                
                
                <br/>
                <Button 
                    label="Ingresar" 
                    onPress={()=>{alert('iniciar sesión')}}
                />



            </form>

            <br/>
            <PrimaryText>¿No tienes cuenta?, Crea una</PrimaryText>
            <Button 
                    label="Crear cuenta" 
                    linkTo={"/Signup"}
                />
        </Page>

    );


}
    
