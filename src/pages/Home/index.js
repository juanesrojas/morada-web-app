import { PropertyTypeBtn } from "./components/PropertyTypeBtn";
import { UserHomeInfo } from "./components/UserHomeInfo";
import { PropertyTypesContainer } from "./styles";
import { FaBuilding } from 'react-icons/fa';
import { FaIndustry } from 'react-icons/fa';
import { FaHouseUser } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { FaTractor } from 'react-icons/fa';
import { HomeMessage } from "./components/MessageBox";

const PropertyTypes = [
    {icon: <FaBuilding/>, label:'Apartamentos'},
    {icon: <FaHouseUser/>, label:'Casas'},
    {icon: <FaTree/>, label:'Lotes'},
    {icon: <FaIndustry/>, label:'Bodegas'},
    {icon: <FaWarehouse/>, label:'Locales'},
    {icon: <FaTractor/>, label:'Fincas'}

];



export const Home = () => (

    <>
        <div style={{width:"600px",padding:0,"margin":"auto",display:"flex", "flex-direction":"column"}} >
        <img style={{"justify-content":"center"}} src={require("./components/UserHomeInfo/images/Logo.JPG")}/>

        <UserHomeInfo userName={"Juan Rojas"} userPicture={require("./components/UserHomeInfo/images/profile_picture.png")}/>
       <HomeMessage/>
        <PropertyTypesContainer>
            {//código jsx
                PropertyTypes.map(item => <PropertyTypeBtn icon={item.icon} label={item.label} /> )
            }
        </PropertyTypesContainer>


        </div>

        </>


)