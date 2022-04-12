import { Fragment } from "react";
import { UserHomeInfoWrapper } from "./styles";
import { FaRegBell } from 'react-icons/fa';
import { SubTitle,SecundaryText, Title } from "../../../../globalStyles";


export const UserHomeInfo = ({userName,userPicture}) => (
    <Fragment>
        <UserHomeInfoWrapper>  
            <div className="user-picture"> <img class="picture-box" src={userPicture}/> </div>    
            <div className="user-home-info">
            <SecundaryText>Hola!</SecundaryText>
                <SubTitle>{userName}</SubTitle>
            </div>
            <div className="alerts-container"><div class="alerts-bell"><FaRegBell/></div></div>
        </UserHomeInfoWrapper>
    </Fragment>
)