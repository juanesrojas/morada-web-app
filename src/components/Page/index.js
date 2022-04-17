import { PageWrapper } from "./styles"


export const Page =(props)=>(
    <PageWrapper>
        <div style={{"display":"flex"}}>
            <img style={{"margin":"auto"}} src={require("./images/Logo.JPG")}/>

        </div>

        {props.children}

    </PageWrapper>

)