import { PropertyTypeBtn } from "./components/PropertyTypeBtn";
import { UserHomeInfo } from "./components/UserHomeInfo";
import { PropertyTypesContainer } from "./styles";
import { FaBuilding,FaIndustry,FaHouseUser,FaWarehouse,  FaTree,  FaTractor } from 'react-icons/fa';
import { HomeMessage } from "./components/MessageBox";
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";



const PropertyTypes = [
    {icon: FaBuilding, label:'Apartamentos'},
    {icon: FaHouseUser, label:'Casas'},
    {icon: FaTree, label:'Lotes'},
    {icon: FaIndustry, label:'Bodegas'},
    {icon: FaWarehouse, label:'Locales'},
    {icon: FaTractor, label:'Fincas'}

];



export const Home = () => (

    <>
        
        <Page>

            

            <UserHomeInfo userName={"Juan Rojas"} userPicture={require("./components/UserHomeInfo/images/profile_picture.png")}/>
            <HomeMessage/>
            <PropertyTypesContainer>
                {//código jsx
                    PropertyTypes.map(item => <PropertyTypeBtn icon={item.icon} label={item.label} /> )
                }
            </PropertyTypesContainer>

            <PropertyCard/>
            
            


        </Page>
        



    </>


)