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

export const ButtonContainer = styled.div`

   //--defaultColor:#4A148C;
    display:flex;
    width: 40px;
    height: 40px;
    border:1px solid var(--myPrimaryColor, #4A148C); 
    background-color: var(--myPrimaryBackgroundColor, white);
    border-radius: 15px;
    padding:0;
    color:var(--myPrimaryColor, #4A148C);
    justify-content: center;
    align-items: center;

    &:hover{
        background-color:var(--mySecondaryBackgroundColor, #4A148C);
        cursor:pointer;      
        p{ color:var(--mySecondaryColor, white);}
        svg{
            color:var(--mySecondaryColor, white);
        };   
    };     
    
   

`