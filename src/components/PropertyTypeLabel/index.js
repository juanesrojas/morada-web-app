import { PropertyTypes } from "../../pages/Home";
import { PropertyTypeLabelWrapper } from "./styles";
import { FaBuilding } from 'react-icons/fa';



export const PropertyTypeLabel = ({icon:Icon,type}) =>(
    <PropertyTypeLabelWrapper>
        <div>
            <Icon/>
            <p>
                {type}
            </p>
        </div>
    </PropertyTypeLabelWrapper>

)