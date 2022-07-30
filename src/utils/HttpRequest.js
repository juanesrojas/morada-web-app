import axios from 'axios';
import { getToken } from './TokenLS';

export const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
};
//es recomendable crear un diccionario para evitar errores de Typing
export const CONTENT_TYPES = {
    APPLICATION_JSON:'application/json',
    MULTIPART_FORM_DATA: 'multipart/form-data'
}

const headersConfig = (contentType,token) =>{
    return{
        "Content-Type": contentType,
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
}

//parametrizar la llamada a un servicio web

export const requestHttp = async (
    {
        method = HTTP_VERBS.POST,
        endpoint = '/',
        body = {},
        params = {}, //query params
        token  = null,
        contentType=CONTENT_TYPES.APPLICATION_JSON
    }
) =>{
    try{
        const url = process.env.REACT_APP_BASE_API + endpoint;
        const authToken = token || getToken();
        console.log("url: ",url);
        const options = {
            url, //url:url => url,
            method,
            data:body,
            params,
            headers: headersConfig(contentType, authToken)
        };
        return await axios(options);
    } catch (error){
        throw error;//tirar la "papa caliente"
    }
}