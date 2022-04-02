import { Fragment } from "react";
import { UserHomeInfoWrapper } from "./styles";
import { FaRegBell } from 'react-icons/fa';


export const UserHomeInfo = ({userName,userPicture}) => (
    <Fragment>
        <UserHomeInfoWrapper>  
            <div class="user-picture"> <img class="picture-box" src={require("C:/Users/Alienware Alpha/Documents/Diplomado FullStack/Proyectos/MORADA-APP/morada-web-app/src/pages/Home/components/UserHomeInfo/images/profile_picture.png")} alt="profile_picture"/> </div>    
            <div class="user-home-info">
                <p><span>Hola!</span></p>
                <h4>{userName}</h4>
            </div>
            <div class="alerts-container"><div class="alerts-bell"><div><FaRegBell/></div></div></div>
        </UserHomeInfoWrapper>
    </Fragment>
)