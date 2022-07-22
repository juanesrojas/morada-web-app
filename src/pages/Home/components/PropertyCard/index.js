
import { PropertyInfoCard } from "../../../../components/PropertyInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";
import { getStaticImage } from "../../../../utils/StaticImage";



export const PropertyCard = (property) =>(

        <PropertyCardWrapper>
            <Link to={`/properties/${property._id}`}>
                <PropertyImageWrapper>
                    <img alt="foto propiedad" src={getStaticImage(property.mainImage)}/>
                </PropertyImageWrapper>
                <PropertyInfoCard {...property}/>
            </Link>
        </PropertyCardWrapper>




)