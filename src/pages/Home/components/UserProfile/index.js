import { Fragment } from "react";
import { UserHomeInfoWrapper } from "./styles";
import { FaBuilding } from 'react-icons/fa';

export const UserHomeInfo = ({userName,userPicture}) => (
    <Fragment>
        <UserHomeInfoWrapper>  
            <div><p>{userPicture}</p></div>        
            <div><p>{userName}</p></div>
            <div><p>alertas</p></div>
        </UserHomeInfoWrapper>
    </Fragment>
)