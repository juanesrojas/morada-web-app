import { PropertyBusinessTypeWrapper } from "./styles";
import { FaHandshake } from 'react-icons/fa';


export const PropertyBusinessType = ({typeId}) =>(
    <PropertyBusinessTypeWrapper>
        <FaHandshake/>
        <p>
            {typeId}
        </p>
    </PropertyBusinessTypeWrapper>


)