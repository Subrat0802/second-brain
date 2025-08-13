const BASE_URL = "http://localhost:3001/api/v1";

export const endpoint = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    SIGNIN_API: BASE_URL + "/auth/signin"
}

export const contentEndpoint = {
    CREATE_CONTENT: BASE_URL + "/content/create",
}