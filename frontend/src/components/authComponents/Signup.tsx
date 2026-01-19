import { useRef, type FormEvent } from "react";
import Button from "../ui/Button";
import InputTag from "../ui/InputTag";
import { signup } from "../../services/operations/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const conPassRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleChange = () => {};
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = userNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const conPassword = conPassRef.current?.value || "";
    console.log(username)

    const response = await signup({ username, email, password, conPassword });
    console.log("RESPONSE,", response);
    if (response.status == 200) {
      toast.success(response.data?.message);
      navigate("/auth/signin")
    }else{
      toast.error(response.data.message);
      throw Error
    }
  };
  return (
    <div className="flex flex-col h-[100%] px-4 sm:px-8 md:px-12 lg:px-16  justify-center ">
      <p className="text-2xl sm:text-3xl">Start Building Your Digital Mind</p>
      <p className="italic mb-6 md:mb-10 text-sm sm:text-base">
        Sign up to create your personal hub where inspiration never gets lost.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-4 md:mr-0 lg:mr-28 max-w-md"
      >
        <InputTag
          onChange={handleChange}
          ref={userNameRef}
          placeText="Username"
          labelText="Username:"
          id="Username"
          type="text"
        />
        <InputTag
          onChange={handleChange}
          ref={emailRef}
          placeText="Email Address"
          labelText="Email Address:"
          id="email"
          type="text"
        />
        <InputTag
          onChange={handleChange}
          ref={passwordRef}
          placeText="Password"
          labelText="Password:"
          id="password"
          type="password"
        />
        <InputTag
          onChange={handleChange}
          ref={conPassRef}
          placeText="Confirm Password"
          labelText="Confirm Password:"
          id="conPassword"
          type="password"
        />
        <Button text="Sign Up" variant="tertiary" size="lg" type="submit"/>
      </form>
    </div>
  );
};

export default Signup;
