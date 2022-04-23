import { Fragment } from "react";
import { ButtonStyled, ButtonWrapper,StyledLink } from "./styles";
import { FaHome,FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const Button = ({label,onPress, linkTo,icon}) => {
    //const navigate = useNavigate();
    return(
        <Fragment>
            {
             onPress ? (<ButtonStyled onClick = {onPress}>{label}</ButtonStyled>   )
                : (<StyledLink to={linkTo}>{label}</StyledLink>)
            }

           
        </Fragment>
    );
}
