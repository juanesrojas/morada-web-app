import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

const baseStyles = css`
    //width: 100%;
    font-size: 1em;
    color: white;
    background-color: #4A148C;
    text-align: center;
    border:none;
    border-radius:6px;
    padding: 9px 10px;
    opacity:0.8;

    &:hover{
        cursor: pointer;
        opacity:1;
    }

`;

export const ButtonStyled = styled.button`
   ${baseStyles}
   width: 100%;
`;

export const StyledLink = styled(Link)`
      ${baseStyles}
      text-decoration:none;
      display:block;
`;

export const ButtonWrapper = styled.div`
    border: 1px;
    background-color:white;
    border-radius: 10px;
    align-items: center;
    //width:100%;
    margin:0px 0px;
    padding:0px;
    display:flex;

    div{
        margin:0px 2px;
        padding:0px;
        background-color:white;
    };



    .home-container{
        flex:1;

    };

    .home-icon{
        display:flex;
        width: 40px;
        height: 40px;
        border:1px solid #4A148C;
        border-radius: 15px;
        padding:0;
        color:#4A148C;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color:#4A148C;
            cursor:pointer;      
            p{ color:white;}
            svg{
                color:white;
            };   
        };     
    };
   

`