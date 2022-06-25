import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";


import { FaEye,FaEyeSlash} from 'react-icons/fa';
import { requestHttp } from "../../utils/HttpRequest";

import { useForm } from "react-hook-form"; //Hook 
import { showAlert , SW_ICON} from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";
 


export const Login =()=>{
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const {
        register, 
        handleSubmit, 
        formState:{errors,isValid} 
    } = useForm({mode:'onChange'});
  
    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible)
    };

    const onSubmitLogin = (data) => {
        console.log('data', data);
        loginRequest(data);
    }

    const loginRequest = async (data) =>{
        try{
            const response = await requestHttp(
                {
                    endpoint:'/users/login', 
                    body:data
                }
            );

            console.log(response);
            showAlert('Bienvenido',"Validación correcta", SW_ICON.SUCCESS,()=>{navigate('/')});
        }catch (error){
            console.log('error',error);
            showAlert('Error',"Credenciales incorrectas", SW_ICON.ERROR);
        }
    }

    

    return (

        <Page hideMenu>
            <ShortMenu/>
            <Title>Iniciar Sesión </Title>
            <br/>
            <form onSubmit={handleSubmit(onSubmitLogin)}>

                <FormControl>
                    <label>Correo electrónico</label>
                    <div className="input">
                        <input type="email" {...register("email", {required:true, pattern:/\S+@\S+\.\S+/ })}/>
                        {errors.email?.type === 'required' && <span>Email requerido</span>}
                        {errors.email?.type === 'pattern' && <span>Ingrese un correo válido</span>}
                    </div>
                </FormControl>


                <FormControl>
                    <div className="pswWrapper">                       
                        <div className="pswContainer" >
                            <label>Contraseña</label>
                            <div className="input">
                                <input type={!visible ? "password": "text"} {...register("password",{required:true})}/>
                                {errors.password?.type === 'required' && <span>Contraseña requerida</span>}
                            </div>               
                        </div>
                        <div className="pswViewContainer" style={{"flex":"1","display":"flex","alignItems":"center","justifyContent":"center"}}>
                            <SquaredButton icon={!visible ? FaEyeSlash:FaEye} color={"#4A148C"}  link="" funct={tooglePasswordVisible}/>
                        </div>
                        
                    </div>                   
                </FormControl> 
                            


           

                
                
                <br/>

                <Button disabled={!isValid ? true:false} type="submit" onPress={()=>{}}
                    label="Ingresar" 
                    
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
    
