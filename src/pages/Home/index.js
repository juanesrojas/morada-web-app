import { PropertyTypeBtn } from "./components/PropertyTypeBtn";
import { UserHomeInfo } from "./components/UserHomeInfo";
import { PropertyTypesContainer } from "./styles";
import { FaBuilding } from 'react-icons/fa';
import { FaIndustry } from 'react-icons/fa';
import { FaHouseUser } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { FaTractor } from 'react-icons/fa';

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
        <div style={{width:"600px"}} >
        <h1>Morada</h1>
        <UserHomeInfo userName={"Juan Rojas"} userPicture={"C:/Users/Alienware Alpha/Documents/Diplomado FullStack/Proyectos/MORADA-APP/morada-web-app/src/pages/Home/components/UserHomeInfo/images/profile_picture.png"}/>
       <div>
           <h2>Find</h2>
           <h2>best place nearby</h2>
       </div>
        <PropertyTypesContainer>
            {//código jsx
                PropertyTypes.map(item => <PropertyTypeBtn icon={item.icon} label={item.label} /> )
            }


        </PropertyTypesContainer>


        </div>

        </>


)