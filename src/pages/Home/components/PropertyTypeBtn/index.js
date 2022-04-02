import { Fragment } from "react";
import { PropertyTypeBtnWrapper } from "./styles";
import { FaBuilding } from 'react-icons/fa';

export const PropertyTypeBtn = ({icon, label}) => (
    <Fragment>
        <PropertyTypeBtnWrapper>
            <a href="#">
                <p class="icon">{icon}</p>
                <p>{label}</p>
            </a>

        </PropertyTypeBtnWrapper>
    </Fragment>
)