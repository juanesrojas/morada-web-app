import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState,useRef} from "react";
import { useForm } from "react-hook-form"; //Hook 
import { showAlert , SW_ICON} from "../../utils/SwAlert";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect } from "react";

import {BUSINESS_TYPES, CITIES, PROPERTY_TYPES} from './../../constants/data'

import { FaEye,FaEyeSlash} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const propertyTypeList = [
    { propertyType: 1, label: "Apartamento" },
    { propertyType: 2, label: "Casa" },
    { propertyType: 3, label: "Lote" },
    { propertyType: 4, label: "Bodega" },
    { propertyType: 5, label: "Local" },
    { propertyType: 6, label: "Finca" }
  ];

  const businessTypeList = [
    { businessType: 1, label: "Arriendo" },
    { businessType: 2, label: "Venta" },
  ];

  

export const AddProperty =()=>{
    const [visible, setVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState({zones:{}});
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register, 
        handleSubmit, 
        watch,
        formState:{errors,isValid}  
    } = useForm({mode:'onChange'});

    const watchFields = watch("city");

    const selectedCity1 = useRef({current:'1'});
    selectedCity1.current=watch("city");

    const changeSelectCityHandler = (event) => {
        console.log("handler: ",event);
        setSelectedCity(event.target.value);

      };

      useEffect(() => {
        const subscription = watch((value, { name, type }) => {setSelectedCity(CITIES[value.city]||{})});
        //console.log(Object.entries(CITIES[selectedCity1.current].zones));
        console.log(selectedCity1);
        return () => subscription.unsubscribe();
      }, [watchFields]);
  
    const onSubmitLogin = (data) => {
       
        addPropertyRequest(data);

    };
    

    const addPropertyRequest = async (data) =>{
        console.log("user: ",user);
        console.log("ciudad elegida: ",selectedCity);

        if (user.isAuthenticated){
            data.ownerId=user.id;
            data.status=1;
            
            console.log("data: ",data);            
            try{
                const response = await requestHttp(
     
                    {
                        endpoint:'/properties', 
                        body:data
                    }
                );
    
                console.log(response);
    
                const {data: dataResponse}=response;
                showAlert('Propiedad agregada',"Propiedad agregada", SW_ICON.SUCCESS,"","Ok",false,"",()=>{navigate('/')});
            }catch (error){
                console.log('error',error);
                showAlert('Error',"No se pudo crear propiedad", SW_ICON.ERROR,"","Ok",false,"",);
            }
        }
     
      
    };


    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar una nueva propiedad</Title>
            <br/>
            <form onSubmit={handleSubmit(onSubmitLogin)} >
    
                <FormControl>
                    <label>Título de la propiedad</label>
                    <div class="input">
                        <input type="text" {...register("title",{required:true})}  />
                    </div>
                </FormControl>
    
                <FormControl>
                    <label>Ciudad</label>
                    <div class="input">
                       
                        <select  {...register("city",{required:true})}>
                            {Object.entries(CITIES).map((item)=>(<option value={item[0]}>{item[1].city}</option>))}
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Zona</label>
                    <div class="input">
   
                        <select {...register("zone",{required:true})}>
                            {Object.entries(selectedCity.zones).map((item)=>(<option value={item[0]}>{item[1]}</option>))}
                        </select>
                        
                    </div>
                </FormControl>

                <FormControl>
                    <label>Descripción corta del inmueble</label>
                    <div class="input">                        
                        <textarea rows = "5" cols = "60" name = "description" placeholder="Enter text" {...register("shortDescription",{required:true})} >
                          
                        </textarea>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Descripción completa del inmueble</label>
                    <div class="input">                        
                        <textarea rows = "5" cols = "60" name = "description" placeholder="Enter text"  {...register("description",{required:true})} >
                          
                        </textarea>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Área (m2)</label>
                    <div class="input">
                        <input type="number" {...register("area",{required:true})} />
                    </div>
                </FormControl>

                <FormControl>
                    <label>Tipo de inmueble</label>
                    <div class="input">
                        <select {...register("propertyType",{required:true})}>
                            {propertyTypeList.map((item)=>(<option value={item.propertyType}>{item.label}</option>))}
                            
                        </select>
                    </div>
                </FormControl>


                <FormControl>
                    <label>Modalidad</label>
                    <div class="input">
                        <select {...register("businessType",{required:true})}>
                            {businessTypeList.map((item)=>(<option value={item.businessType}>{item.label}</option>))}
                            
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Habitaciones</label>
                    <div class="input">
                        <select >
                            <option value="N.A">N.A.</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="+7">+7</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Baños</label>
                    <div class="input">
                        <select >
                            <option value="N.A">N.A.</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="+7">+7</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Parqueaderos</label>
                    <div class="input">
                        <select >
                            <option value="0">0</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="+3">+3</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Valor ($COP)</label>
                    <div class="input">
                        <input type="number" {...register("value",{required:true})} />
                    </div>
                </FormControl>
    
                <FormControl>
                    <label>Añadir fotografías</label>
                    <div class="input">
                        <input type="file" multiple />
                    </div>
                </FormControl>
                      
 
    
                <br/>
                <Button 
                    label="Agregar propiedad" 
                    type="submit" 
                    onPress={()=>{alert('agregar propiedad')}}
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


