import { Fragment } from "react";
import { BackButtonWrapper } from "./styles";
import { FaHome,FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export const BackButton = () => {
    const navigate = useNavigate();
    return(
        <Fragment>
            <BackButtonWrapper>  
                <div className="home-container"><Link to="/"><div class="home-icon" ><FaHome/></div></Link></div>
                <div className="middle-space"></div>
                <div className="back-container"><div class="back-icon" onClick={() => navigate(-1)}><FaArrowLeft/></div></div>
            </BackButtonWrapper>
        </Fragment>
    );
}