import { contentEndpoint } from "../api"
import { apiConnector } from "../apiConnector"

const {CREATE_CONTENT} = contentEndpoint;

export const createCOntent = () => {
    try{
        const response = apiConnector("POST", CREATE_CONTENT, {});
        console.log("CREATE CONTENT RESPONSE", response);
    }catch(error){
        console.log(error);
    }
}