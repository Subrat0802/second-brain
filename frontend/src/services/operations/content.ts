import { toast } from "sonner";
import { contentEndpoint } from "../api"
import { apiConnector } from "../apiConnector"


const {CREATE_CONTENT, SAVE_CONTENT} = contentEndpoint;

export interface ContentProps {
    contentType: string,
    link: string,
    title: string,
    description: string,
    tag: string,
    type: string,
}

export const createContent = async ({contentType, link, title, description, tag, type}: ContentProps) => {
    try{
        const response = await apiConnector("POST", CREATE_CONTENT, {contentType, link, title, description, tag, type});
        console.log("CREATE CONTENT RESPONSE", response);
        return response;
    }catch(error){
        console.log(error);
    }
}


export const saveContet = async(contentId:string) => {
    
    try{
        const response = await apiConnector("POST", SAVE_CONTENT, {contentId})
        console.log("SAVEITEM",response);
        toast.success("Content saved")
        
    }catch(error){
        console.log(error);
    }
}