import { PropertyImageScrollingWrapper } from "./styles";
import { getStaticImage } from "../../../../utils/StaticImage";


export const PropertyImageScrolling = ({image}) =>(

    
        <PropertyImageScrollingWrapper>
           
            <img alt="foto propiedad" src={getStaticImage(image)}/>
        </PropertyImageScrollingWrapper>






)