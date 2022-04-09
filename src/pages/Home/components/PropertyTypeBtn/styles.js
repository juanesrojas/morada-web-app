import styled from 'styled-components';

export const PropertyTypeBtnWrapper = styled.div`
    border: 1px;
    background-color:#F3E5F5;

    border-radius: 10px;
    min-width: 100px;
    margin:10px 5px;
    padding:10px;

    p{
        color:#4A148C;
        font-size: 0.8em;
        font-weight: 700;
        margin:0px;
        text-align:center;

    };
    .icon{
        font-size:2.8em;
    };
    a{
       text-decoration:none;
    };
    &:hover{background-color:#4A148C;
        color:white;
    
        p{ color:white;}

    };
       

`;