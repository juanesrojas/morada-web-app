import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState, useRef} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

import { requestHttp } from "../../utils/HttpRequest";
import { useForm } from "react-hook-form"; //Hook 
import { showAlert , SW_ICON} from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";
 


export const Signup =()=>{
    const [visible, setVisible] = useState(false);

   const navigate = useNavigate();   

    const {
        register, 
        handleSubmit, 
        watch,
        formState:{errors,isValid} 
    } = useForm({mode:'onChange'});

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmitSignUp = (data) => {
        data.role=1;
        data.documentType="cc";
        console.log('data', data);
        signUpRequest(data);
    }

    const signUpRequest = async (data) =>{
        try{
            
            const response = await requestHttp(
                {
                    endpoint:'/users/signup', 
                    body:data
                }
            );

            console.log(response);
            showAlert('Felicitaciones',"Usuario registrado", SW_ICON.SUCCESS,()=>{navigate('/login')});
        }catch (error){
            console.log('error',error);
            showAlert('Ups, un error ha ocurrido',error.response.data, SW_ICON.ERROR);
        }
    }

    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Crear cuenta</Title>
            <br/>
            <form onSubmit={handleSubmit(onSubmitSignUp)}>
    
                <FormControl>
                    <label>Nombre Completo</label>
                    <div className="input">
                        <input type="text" {...register("name", {required:true})}/>
                        {errors.name?.type === 'required' && <span>Nombre requerido</span>}
                    </div>
                </FormControl>
    
                
                <FormControl>
                    <label>Identificación</label>
                    <div className="input">
                        <input type="text" {...register("document", {required:true})}/>
                        {errors.document?.type === 'required' && <span>Número de identificación requerido</span>}
                    </div>
                </FormControl>
    
    
                <FormControl>
                    <label>Teléfono</label>
                    <div className="input">
                        <input type="tel" {...register("phone", {required:true})}/>
                        {errors.phone?.type === 'required' && <span>Teléfono requerido</span>}
                    </div>
                </FormControl>
    
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
                                <input type={!visible ? "password": "text"}  {...register("password", {required:true})}/>
                                {errors.password?.type === 'required' && <span>Contraseña requerida</span>}
                                
                            </div>               
                        </div>
                        <div className="pswViewContainer" style={{"flex":"1","display":"flex","alignItems":"center","justifyContent":"center"}}>
                            <SquaredButton icon={!visible ? FaEyeSlash:FaEye} color={"#4A148C"}  link="" funct={() =>{ setVisible((visible) => !visible)}}/>
                        </div>
                        
                    </div>                   
                </FormControl> 

                <FormControl>
                    <div className="pswWrapper">                       
                        <div className="pswContainer" >
                            <label>Confirme Contraseña</label>
                            <div className="input">
                                {
                                !visible ? (<input type="password"{...register("psswConfirm", {required:true,validate: value => value === password.current || "The passwords do not match" })}/>  )
                                    : (<input type="text"{...register("psswConfirm", {required:true,validate: value => value === password.current || "The passwords do not match" })}/>)
                                }
                                 {errors.psswConfirm?.type === 'required' && <span>Contraseña requerida</span>}
                                 {errors.psswConfirm?.type === 'validate' && <span>Contraseñas no coinciden</span>}

                            </div>               
                        </div>
                    </div>                   
                </FormControl> 
    
                <br/>
                <Button disabled={!isValid ? true:false} type="submit" onPress={()=>{}}
                    label="Crear cuenta" 
                    
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


