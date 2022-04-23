import styled from 'styled-components';


export const MenuWrapper = styled.div`
    border: 2px;
    background-color:#F3E5F5;
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left:0;
    display:flex;
    align-items: center;
    a{
        flex:1;
        text-decoration:none;
        height:100%;

    }

    a:hover{
        background-color: #4A148C;
        svg{color:white;}
        p{color:white;}
    }
    


    

`;

export const MenuItemWrapper = styled.section`
    border: 1px solid white;
    height: 100%;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align:center;
    display:flex;
    svg{
        font-size:1.5em;
        color:#4A148C;
        font-weight: 700;
        margin:px;

    }  
    p{
        color:#4A148C;
        font-size: 0.8em;
        font-weight: 700;
        margin:5px;
        text-align:center;

    };





`;