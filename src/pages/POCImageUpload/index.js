import { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { showAlert, SW_ICON } from "../../utils/SwAlert";

 
 
 export const POCImageUpload = () => {
    const [file, setFile] = useState(null);
    const fileSelectedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
        //requestUploadFile(filfileSelectede);
    }

    const uploadFileHandler = (event) =>{
        if (file){
            requestUploadFile(file);
        } else {
            showAlert("No file", "Selecciona un archivo a cargar",SW_ICON.ERROR);
        }

    }

    const requestUploadFile = async (file) =>{
        try{
            const formData =new FormData();
            formData.append("propertyImage",file);
            const response = await requestHttp({
                endpoint:'/properties/upload',
                contentType: CONTENT_TYPES.MULTIPART_FORM_DATA,
                body:formData
            });
            showAlert('Archivo cargado', 'El archivo fue cargado correctamente',SW_ICON.SUCCESS);
            console.log('response',response);
        } catch (error){
            console.log('error',error);
        }
    }

    return (
        <Fragment>
            <p>upload image</p>
            <input 
                type="file"
                accept="image/png, image/jpeg"
                onChange={fileSelectedHandler}
            />
            <br/>
            <Button label={"Subir imagen"} onPress={uploadFileHandler} />

        </Fragment>



    )
};

