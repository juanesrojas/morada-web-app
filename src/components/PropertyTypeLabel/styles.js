import styled from 'styled-components';

export const PropertyTypeLabelWrapper = styled.div`
    background-color:#4A148C;
    border-radius: 25px;
    padding: 2px 3px;
    margin: 5px 2px;
    display: inline-block;

    div{
        display:flex;
        align-items: center;
        padding:3px 3px;
        margin:0;
    }

    svg{
        color: white;
        font-size: 1.2em;  
        margin: 0 5px;
        padding:0;
    }

    p{
        color:white;
        font-size: 0.88em;
        margin: 0 5px;
        font-weight: bold;
        padding:0;

    }
`