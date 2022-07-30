import { Fragment } from "react";
import { PropertyOwnerInfoWrapper } from "./styles";
import { FaRegCommentAlt,FaPhoneAlt } from 'react-icons/fa';
import { SubTitle,SecondaryText, Title } from "../../../../globalStyles";
import { SquaredButton } from "../../../../components/Button";
import { showAlert , SW_ICON} from "../../../../utils/SwAlert";



export const PropertyOwnerInfo = ({userName,userPicture,PropertyID}) => (
    <Fragment>
        <PropertyOwnerInfoWrapper>  
            <div className="user-picture"> <img className="picture-box" src={userPicture}/> </div>    
            <div className="user-home-info">
            <SecondaryText>Owner</SecondaryText>
                <SubTitle>{userName}</SubTitle>
            </div>
            <div className="message-container"> <SquaredButton icon={FaRegCommentAlt} link="" funct={()=>showAlert('Deja tu mensaje',"Deja un mensaje al propietario", SW_ICON.INFO,"textarea","Enviar",true,"Cancelar",()=>{})} /></div>
            <div className="call-container"> <SquaredButton icon={FaPhoneAlt} link="" funct={()=>showAlert('Datos de contacto',"celular: +57 301 xxxxxxx", SW_ICON.INFO,"","Ok",false,"",()=>{})} primaryColor={"white"} primaryBackgroundColor={"green"} hoverColor={"white"} hoverBackgroundColor={"red"}/>  </div>
        </PropertyOwnerInfoWrapper>
    </Fragment>
)