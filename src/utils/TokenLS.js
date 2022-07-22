const TOKEN ='token_morada';

//guardar token
export const setToken = (value) => {
        localStorage.setItem(TOKEN,value);
}

//obtener token almacenado
export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

//limpiar tken cuando se cierra la sesión

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}