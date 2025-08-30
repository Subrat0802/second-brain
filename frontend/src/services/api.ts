const BASE_URL = "http://localhost:3001/api/v1";

export const endpoint = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    SIGNIN_API: BASE_URL + "/auth/signin",
    GET_USER: BASE_URL + "/auth/getUserData"
}

export const contentEndpoint = {
    CREATE_CONTENT: BASE_URL + "/content/create",
    SAVE_CONTENT: BASE_URL + "/content/save",
}

export const collectionEndpoint = {
    CREATE_COLLECTION: BASE_URL + "/collection/create"
}