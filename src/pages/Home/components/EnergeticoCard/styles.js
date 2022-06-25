import styled from 'styled-components';
import { PRIMARY_COLOR,SECONDARY_COLOR } from '../../../../constants/styleConstants';

export const PropertyCardWrapper = styled.div`
    margin-top:20px;
    border: 1px solid ${SECONDARY_COLOR};
    border-radius: 10px;
    padding: 15px;
    display:flex;
    flex-direction: column;
  
    //Shadow
    & {
        box-shadow: 4px 2px 7px 0px rgba(194,194,194,0.75);
        -webkit-box-shadow: 4px 2px 7px 0px rgba(194,194,194,0.75);
        -moz-box-shadow: 4px 2px 7px 0px rgba(194,194,194,0.75);
    }
    //fin shadow

    
    a {
        text-decoration:none;
        display:flex;

    }

`;

export const PropertyImageWrapper = styled.div`
 
    flex:30;
    border-radius: 10px;
    img{
        width:100%;
        border-radius: inherit;
    }

`;
