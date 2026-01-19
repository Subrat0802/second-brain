import { toast } from "sonner";
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

export const signup = async ({ username, email, password, conPassword }: signupProps) => {
  try {
    const response = await apiConnector("POST", SIGNUP_API, {
      username,
      email,
      password,
      conPassword,
    });

    console.log("SIGNUP RESPONSE", response);
    return response;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Check if error is from server
    if (error.response && error.response.data) {
      console.error("SIGNUP ERROR:", error.response.data.errors[0].message);
      toast.error(error.response.data.errors[0].message);
      throw error.response.data;   // server error message
    } else {
      console.error("SIGNUP ERROR: Network/Unknown", error);
      throw { message: "Something went wrong. Please try again later." }; // fallback error
    }
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
  if (error.response && error.response.data) {
    const serverError = error.response.data;

    console.error("Signin ERROR:", serverError.message);

    const zodMsg = serverError?.errors?.[0]?.message; 
    const errorMsg = serverError?.message;

    const finalMessage = zodMsg || errorMsg || "Something went wrong. Please try again.";

    console.log("ERROR DEBUG:", errorMsg, zodMsg);
    toast.error(finalMessage);

    throw serverError; 
  } else {
    console.error("Signin ERROR", error);
    toast.error("Network error. Please try again later.");
    throw { message: "Something went wrong. Please try again later." };
  }
}
};

export const getUser = async () => {
  try {
    const response = await apiConnector("GET", GET_USER);
    // console.log("HELLEEOEHNFB", response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
