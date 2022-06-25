import { FaHome,FaUserAlt,FaStar,FaPlusSquare,FaBuilding } from 'react-icons/fa';
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';


const CustomerMenuItems = [
    {
        icon: FaHome,
        label: 'Inicio',
        path: '/'
    },

    {
        icon: FaStar,
        label: 'Favoritos',
        path: '/favorites'
    },

    {
        icon: FaUserAlt,
        label: 'perfil',
        path: '/account'
    }

];

const AdminConfigItems = [
    {
        icon: FaHome,
        label: 'Inicio',
        path: '/'
    },

    {
        icon: FaPlusSquare,
        label: 'Editar copañías',
        path: '/edit-company'
    },

   

    {
        icon: FaUserAlt,
        label: 'Usuario',
        path: '/account'
    }

];



export const MenuConfig = () =>{
  
    return(
        <MenuWrapper>
            {
               AdminConfigItems.map(item=><MenuItem {...item} />)
            }

        </MenuWrapper>

    );
}
