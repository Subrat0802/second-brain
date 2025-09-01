const BASE_URL = import.meta.env.VITE_BASE_URL as string;
console.log("BASE_URL", BASE_URL);
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