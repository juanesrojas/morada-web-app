import { Fragment } from "react";
import { UserHomeInfoWrapper } from "./styles";
import { FaRegBell } from 'react-icons/fa';
import { SubTitle } from "../../../../globalStyles";


export const UserHomeInfo = ({userName,userPicture}) => (
    <Fragment>
        <UserHomeInfoWrapper>  
            <div className="user-picture"> <img class="picture-box" src={userPicture}/> </div>    
            <div className="user-home-info">
            <SubTitle>Hola!</SubTitle>
                <h4>{userName}</h4>
            </div>
            <div className="alerts-container"><div class="alerts-bell"><FaRegBell/></div></div>
        </UserHomeInfoWrapper>
    </Fragment>
)