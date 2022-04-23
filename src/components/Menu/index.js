import { FaHome,FaUserAlt,FaStar } from 'react-icons/fa';
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';


const MenuItems = [
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


export const Menu = () =>(
    <MenuWrapper>
        {
            MenuItems.map(item=><MenuItem {...item} />)
        }

    </MenuWrapper>

);
