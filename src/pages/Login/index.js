import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";

export const Login =()=>(
    <Page hideMenu>
        <BackButton/>
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
                <label>Contraseña</label>
                <div class="input">
                    <input type="password"/>
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

)