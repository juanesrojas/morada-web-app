import axios from 'axios';

export const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
};

const headersConfig = (token) =>{
    return{
        "Content-Type": "application/json",
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
        token  =''
    }
) =>{
    try{
        const url = process.env.REACT_APP_BASE_API + endpoint;
        console.log("url: ",url);
        const options = {
            url, //url:url => url,
            method,
            data:body,
            params,
            headers: headersConfig(token)
        };
        console.log("aqui vamos: ");
        return await axios(options);
    } catch (error){
        throw error;//tirar la "papa caliente"
    }
}