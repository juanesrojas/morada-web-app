import { Fragment } from "react";
import { PropertyOwnerInfoWrapper } from "./styles";
import { FaRegCommentAlt,FaPhoneAlt } from 'react-icons/fa';
import { SubTitle,SecundaryText, Title } from "../../../../globalStyles";


export const PropertyOwnerInfo = ({userName,userPicture,PropertyID}) => (
    <Fragment>
        <PropertyOwnerInfoWrapper>  
            <div className="user-picture"> <img class="picture-box" src={userPicture}/> </div>    
            <div className="user-home-info">
            <SecundaryText>Owner</SecundaryText>
                <SubTitle>{userName}</SubTitle>
            </div>
            <div className="message-container"><div class="message-icon"><FaRegCommentAlt/></div></div>
            <div className="call-container"><div class="call-icon"><FaPhoneAlt/></div></div>
        </PropertyOwnerInfoWrapper>
    </Fragment>
)