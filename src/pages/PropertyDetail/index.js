import { BackButton } from "../../components/BackButton";
import { Page } from "../../components/Page";
import { PropertyInfoCard } from "../../components/PropertyInfoCard";
import { PrimaryText, SubTitle } from "../../globalStyles";
import { PropertyImageScrolling } from "./components/PropertyImageScrolling";
import { PropertyOwnerInfo } from "./components/PropertyOwnerInfo";
import { PropertyDetailContainer } from "./styles";





export const PropertyDetail = (PropertyID) =>(

        <Page>
            <PropertyDetailContainer>
                <BackButton/>
                <PropertyImageScrolling/>
                <PropertyInfoCard/>
                <div>
                    <SubTitle>Description:</SubTitle>
                    <PrimaryText>Descripción del inmueble</PrimaryText>
                </div>
                <PropertyOwnerInfo  userName={"Juan Rojas"} userPicture={require("./components/PropertyOwnerInfo/images/profile_picture.png")} />
            </PropertyDetailContainer>
            
        </Page>
    );

