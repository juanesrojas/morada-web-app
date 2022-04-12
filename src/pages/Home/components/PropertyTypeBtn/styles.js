import styled from 'styled-components';

export const PropertyTypeBtnWrapper = styled.div`
    border: 1px;
    background-color:#F3E5F5;
    border-radius: 10px;
    min-width: 100px;
    margin:10px 5px;
    padding:10px;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    &:hover{
        background-color:#4A148C;
        cursor:pointer;      
        p{ color:white;}
        svg{
            color:white;
        }        
    };       
`;

export const IconWrapper = styled.div`
    svg{
        font-size:2.8em;
        color:#4A148C;
        font-weight: 700;
        margin:0px;
    }    
`;