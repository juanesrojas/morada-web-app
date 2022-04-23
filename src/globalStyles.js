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

export const SecondaryText = styled.p`
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

export const FormControl = styled.div`
        //width: 100%;
        margin: 5px 0;
        border-radius: 6px;
        background-color: #f2f2f2;
        padding: 5px 10px;
        .input{
                padding: 0px 10px;
        }
        label{
                display: block;
                font-size: 0.95em;
                color: #222;
                font-weight:500;
        }

        input[type="email"], input[type="password"]{ //aplica solo email y password
                display:block;
                width:100%;
                font-size: 1.1em;
                padding:5px 0px 5px 0px;
                margin:0px;
                background-color: transparent;
                border:none;
                outline: none;
        }


`;