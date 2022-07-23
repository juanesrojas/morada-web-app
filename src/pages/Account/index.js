import { ShortMenu } from "../../components/ShortMenu";
import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { PrimaryText, SecondaryText, SubTitle, Title, FixedFooter } from "../../globalStyles";
import { useContext } from "react";
import { UserContext, initialState } from "../../contexts/UserContext";
import { removeToken } from "../../utils/TokenLS";
import { showAlert , SW_ICON} from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";

export const Account =()=>{

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const UserInfo = () =>(
        <div>
            <SubTitle>{user.name}</SubTitle>
            <PrimaryText>{user.phone}</PrimaryText>
            <SecondaryText>{user.email}</SecondaryText>
            <hr/>
            <FixedFooter>
                <Button 
                    label="Cerrar Sesión" 
                    onPress={()=>{CloseSession()}}
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

    const CloseSession = () =>{
        setUser(initialState);
        removeToken();
        showAlert('Hasta Pronto',"has cerrado sesión de forma satisfactoria, vuelve pronto", SW_ICON.SUCCESS,()=>{navigate('/')});
    }

    return(
        <Page userProfile={user.role}>
            <ShortMenu/>

            <Title>   mi cuenta</Title>
            {
                user.isAuthenticated ? <UserInfo/> : <UserUnauthorized/>
            }

        </Page>

    )

};
