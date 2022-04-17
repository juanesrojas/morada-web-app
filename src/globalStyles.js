import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0px;
        padding: 0px;
        font-family: "Lato";

    }
`;

export const Title = styled.h1`
        text-transform: capitalize;
        font-weight: 700;
        color:#4A148C;
        margin: 0.1em;
`;

export const SubTitle = styled.h4`  
        text-transform: capitalize;
        font-weight:bold;
        color:#212121; //#4A148C;
        margin: 0.1em;
`;

export const SecundaryText = styled.p`
        font-weight: 300;
        color:#BDBDBD;
        font-size: 1.0em;
        margin: 0.1em;
`;

export const PrimaryText = styled.p`
        font-weight: 400;
        color:#212121;
        font-size: 1.0em;
        margin: 0.1em;
`;