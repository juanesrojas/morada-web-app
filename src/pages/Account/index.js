import { ShortMenu } from "../../components/ShortMenu";
import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { PrimaryText, SecondaryText, SubTitle, Title, FixedFooter } from "../../globalStyles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Account =()=>{

    const {user, setUser} = useContext(UserContext);


    const UserInfo = () =>(
        <div>
            <SubTitle>{user.name}</SubTitle>
            <PrimaryText>{user.phone}</PrimaryText>
            <SecondaryText>{user.email}</SecondaryText>
            <hr/>
            <FixedFooter>
                <Button 
                    label="Cerrar Sesión" 
                    onPress={()=>{alert('cerrar sesión')}}
                />
            </FixedFooter>


        </div>
    )

    const UserUnauthorized = () =>(
        <div>
            <SubTitle>No estás autenticado</SubTitle>
            <PrimaryText>Para acceder a tu perfil de usuario debes iniciar sesión</PrimaryText>
            <hr/>
            <Button 
                label="Iniciar Sesión" 
                linkTo={"/login"}
            />
        </div>
    )
    return(
        <Page>
            <ShortMenu/>

            <Title>   mi cuenta</Title>
            {
                user.isAuthenticated ? <UserInfo/> : <UserUnauthorized/>
            }

        </Page>

    )

};
