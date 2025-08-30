import { toast } from "sonner";
import { collectionEndpoint } from "../api";
import { apiConnector } from "../apiConnector";

const {CREATE_COLLECTION} = collectionEndpoint

interface collectionProp {
    collectionName: string,
    description: string,
    collections: string[]
}

export const createCollection = async ({collectionName, description, collections}: collectionProp) => {
    try{
        const response = await apiConnector("POST", CREATE_COLLECTION, {collectionName, description, collections});
        console.log("CREATE COLLECTION RESPONSE", response);
        
        if(response.statusText !== "OK"){
            toast.error(response.data.mesage);
            return
        }
        toast.success("Collection created successfully");
        return response
        
        
    }catch(error){
        console.log("error", error);
        toast.error("Error while creating collection");
    }
}