import { BrowserRouter } from "react-router-dom";
import { SampleContext } from "./contexts/SampleContext";
import { UserContextStore } from "./contexts/UserContext";
import { GlobalStyle } from "./globalStyles";
import { Navigation } from "./Navigation";
import { Home as Home2} from "./pages/Home";
import { PropertyTypeBtn } from "./pages/Home/components/PropertyTypeBtn";


// Home as Home2 se usa si existen varios componentes con el mismo nombre y los voy a invocar en este componente.
export const App=()=> (
    <BrowserRouter>
        <SampleContext.Provider value="Juan Rojas">
            <UserContextStore>
                <GlobalStyle/>
                <Navigation/>
            </UserContextStore>
        </SampleContext.Provider>
    </BrowserRouter>   

        
)