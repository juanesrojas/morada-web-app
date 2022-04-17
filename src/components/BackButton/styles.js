import styled from 'styled-components';

export const BackButtonWrapper = styled.div`
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
        border:1px solid #6A1B9A;
        border-radius: 15px;
        padding:0;
        color:#6A1B9A;
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

    .back-container{
        flex:1;


    };

    

    .back-icon{
        display:flex;
        width: 40px;
        height: 40px;
        border:1px solid #6A1B9A;
        border-radius: 15px;
        padding:0;
        color:#6A1B9A;
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
    
    .middle-space{
        flex:20;


    };
    

`