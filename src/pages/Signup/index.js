import { ShortMenu } from "../../components/ShortMenu";
import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";

export const Signup =()=>(

    <Page hideMenu>
        <ShortMenu/>

        <Title>Crear cuenta</Title>
        <br/>
        <form>

            <FormControl>
                <label>Nombre Completo</label>
                <div class="input">
                    <input type="text"/>
                </div>
            </FormControl>

            
            <FormControl>
                <label>Identificación</label>
                <div class="input">
                    <input type="text"/>
                </div>
            </FormControl>


            <FormControl>
                <label>Teléfono</label>
                <div class="input">
                    <input type="tel"/>
                </div>
            </FormControl>

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

            <FormControl>
                <label>Confirme Contraseña</label>
                <div class="input">
                    <input type="password"/>
                </div>
            </FormControl>
            

            <br/>
            <Button 
                label="Crear cuenta" 
                onPress={()=>{alert('Crear cuenta')}}
            />



        </form>

        
    </Page>

)