import { Page } from "../../components/Page";
import { ShortMenu } from "../../components/ShortMenu";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const Favorites =()=>{
    const {user,setUser} = useContext(UserContext);
    
    return(
    <Page userProfile={user.role}>
        <ShortMenu/>
        <p>favoritos...</p>
    </Page>

)}