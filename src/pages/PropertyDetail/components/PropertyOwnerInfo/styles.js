import styled from 'styled-components';

export const PropertyOwnerInfoWrapper = styled.div`
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
        //background-color:white;
    };



    .message-container{
        flex:1;

    };

    .message-icon{
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

    .call-container{
        flex:1;


    };

    

    .call-icon{
        display:flex;
        width: 40px;
        height: 40px;
        //border:1px solid green;
        background-color: green;
        border-radius: 15px;
        padding:0;
        color:white;
        justify-content: center;
        align-items: center;
        
        &:hover{
            background-color:red;
            cursor:pointer;      
            p{ color:white;}
            svg{
                color:white;
            }   
        }     

    };
    

    .user-picture{
        flex:3;
    };

    .user-home-info{
        flex:20;
    }

    .picture-box{
     
        background-color:#F3E5F5;
        border-radius: 15px;
        padding:0;
        width: 40px;
        height: 40px;
    

    };

`