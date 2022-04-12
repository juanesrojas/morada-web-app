import { Fragment } from "react";
import { IconWrapper, PropertyTypeBtnWrapper } from "./styles";


export const PropertyTypeBtn = ({icon:Icon, label}) => (

        <PropertyTypeBtnWrapper>           
                <IconWrapper>
                   <Icon />                    
                </IconWrapper>        
                <p>{label}</p>            
        </PropertyTypeBtnWrapper>

)