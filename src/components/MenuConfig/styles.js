import styled from 'styled-components';
import { MENU_HEIGHT,PRIMARY_COLOR,SECONDARY_COLOR } from '../../constants/styleConstants';


export const MenuWrapper = styled.div`
    border: 2px;
    background-color:${SECONDARY_COLOR};
    width: 100%;
    height: 200px;


    display:flex;
    align-items: center;
    flex-direction: column;
    a{
        flex:1;
        text-decoration:none;
        height:100%;
        width:100%;

    }

    a:hover{
        background-color: ${PRIMARY_COLOR};
        svg{color:white;}
        p{color:white;}
    }
    


    

`;

export const MenuItemWrapper = styled.section`
    border: 1px solid white;
    width:100%;
    height: 100%;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align:center;
    display:flex;
    svg{
        font-size:1.5em;
        color:${PRIMARY_COLOR};
        font-weight: 700;
        margin:px;

    }  
    p{
        color:${PRIMARY_COLOR};
        font-size: 0.8em;
        font-weight: 700;
        margin:5px;
        text-align:center;

    };





`;