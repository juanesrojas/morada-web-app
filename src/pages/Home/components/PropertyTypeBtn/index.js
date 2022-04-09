import { Fragment } from "react";
import { IconWrapper, PropertyTypeBtnWrapper } from "./styles";


export const PropertyTypeBtn = ({icon:Icon, label}) => (
    <Fragment>
        <PropertyTypeBtnWrapper>           
                <IconWrapper>
                   <Icon />                    
                </IconWrapper>        
                <p>{label}</p>            
        </PropertyTypeBtnWrapper>
    </Fragment>
)