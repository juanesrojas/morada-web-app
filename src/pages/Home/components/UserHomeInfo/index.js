import { Fragment } from "react";
import { UserHomeInfoWrapper } from "./styles";
import { FaRegBell } from 'react-icons/fa';


export const UserHomeInfo = ({userName,userPicture}) => (
    <Fragment>
        <UserHomeInfoWrapper>  
            <div class="user-picture"> <img class="picture-box" src={userPicture}/> </div>    
            <div class="user-home-info">
                <p><span>Hola!</span></p>
                <h4>{userName}</h4>
            </div>
            <div class="alerts-container"><div class="alerts-bell"><FaRegBell/></div></div>
        </UserHomeInfoWrapper>
    </Fragment>
)