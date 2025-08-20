import { endpoint } from "../api";
import { apiConnector } from "../apiConnector";

const { SIGNUP_API, SIGNIN_API, GET_USER } = endpoint;

export interface signupProps {
  username: string;
  email: string;
  password: string;
  conPassword: string;
}

export interface signinProps {
  email: string;
  password: string;
}

export const signup = async ({
  username,
  email,
  password,
  conPassword,
}: signupProps) => {
  try {
    const response = await apiConnector("POST", SIGNUP_API, {
      username,
      email,
      password,
      conPassword,
    });
    console.log("SIGNUP RESPONSE", response);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signin = async ({ email, password }: signinProps) => {
  try {
    const response = await apiConnector("POST", SIGNIN_API, {
      email,
      password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await apiConnector("GET", GET_USER);
    console.log("HELLEEOEHNFB", response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
