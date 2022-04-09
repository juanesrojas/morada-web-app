import styled from 'styled-components';

export const PropertyCardWrapper = styled.div`
    margin-top:20px;
    border: 1px solid #F3E5F5;
    border-radius: 10px;
    padding: 15px;
    display:flex;
    //Shadow
    & {
        box-shadow: 4px 2px 7px 0px rgba(194,194,194,0.75);
        -webkit-box-shadow: 4px 2px 7px 0px rgba(194,194,194,0.75);
        -moz-box-shadow: 4px 2px 7px 0px rgba(194,194,194,0.75);
    }
    //fin shadow
`;

export const PropertyImageWrapper = styled.div`
 
    flex:30;
    border-radius: 10px;
    img{
        width:100%;
        border-radius: inherit;
    }
`;

export const PropertyInfoWrapper=styled.div`
   
    border-radius: 10px;
    margin-left: 10px;
    flex:70;
    h3 {
        margin:0;
    }
`;