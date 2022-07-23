import { createContext, useState } from "react";

export const initialState = {
    role:1,
    name: 'visitante',
    phone: '',
    identification: '',
    isAuthenticated: false
}

export const UserContext = createContext(initialState);

export const UserContextStore = (props) => {
    const [user, setUser] = useState(initialState);
    
    return(
        <UserContext.Provider value={{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}