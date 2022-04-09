import { Fragment } from "react";
import { SubTitle } from "../../../../globalStyles";
import { PropertyBusinessType } from "../PropertyBusinessType";
import { PropertyTypeLabel } from "../PropertyTypeLabel";
import { PropertyCardWrapper, PropertyImageWrapper, PropertyInfoWrapper } from "./styles";


export const PropertyCard = () =>(

        <PropertyCardWrapper>
            <PropertyImageWrapper>
                <img alt="apartamento" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"/>

            </PropertyImageWrapper>
            <PropertyInfoWrapper>
                <h3>Apartamento en Laureles</h3>
                <SubTitle>Laureles, Medellín</SubTitle>
                <PropertyTypeLabel typeId={"Apartamento"} />
                <PropertyBusinessType typeId={"Venta"}/>
                <p>$400.000.000</p>
            </PropertyInfoWrapper>



    


        </PropertyCardWrapper>




)