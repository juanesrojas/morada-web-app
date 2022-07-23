import React from 'react';
import { Markup } from 'interweave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab as brandIcons } from '@fortawesome/free-brands-svg-icons';
import { PropertyTypes } from "../../pages/Home";
import { PropertyTypeLabelWrapper } from "./styles";
import { FaBuilding } from 'react-icons/fa';
import * as iconos from 'react-icons/fa';





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