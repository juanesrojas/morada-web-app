import { PropertyTypeBtn } from "./components/PropertyTypeBtn";
import { UserHomeInfo } from "./components/UserProfile";
import { PropertyTypesContainer } from "./styles";

const PropertyTypes = [
    {icon: 'icono-apartamento', label:'Apartamentos'},
    {icon: 'icono-casa', label:'Casas'},
    {icon: 'icono-lote', label:'Lotes'},
    {icon: 'icono-bodega', label:'Bodegas'},
    {icon: 'icono-local', label:'Locales'},
    {icon: 'icono-finca', label:'Fincas'}

];

export const Home = () => (

    <>
        <h1>Home -  Morada</h1>
        <UserHomeInfo userName={"Juan Rojas"} userPicture={"picture"}/>
        <PropertyTypesContainer>
            {//código jsx
                PropertyTypes.map(item => <PropertyTypeBtn icon={item.icon} label={item.label} /> )
            }

        </PropertyTypesContainer>

        </>


)