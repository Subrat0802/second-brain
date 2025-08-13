import { useRef, type FormEvent } from "react";
import Button from "../ui/Button";
import InputTag from "../ui/InputTag";
import { signin } from "../../services/operations/auth";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    const response = await signin({email, password})
    console.log("RESPONSE,", response.data.token);
    if (response.status == 200) {
      dispatch(setToken(response.data.token));
      navigate("/dashboard");
      toast.success(response.data?.message);
    }else{
      toast.error(response.data.message);
      throw Error
    }
  }

  return (
    <div className="flex flex-col  h-[100%] px-16  justify-center ">
      <p className="text-3xl">Enter Your Digital Mind</p>
      <p className="italic mb-10">
        Log in to explore your organized world of saved content and rediscover
        what matters most.
      </p>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 md:mr-28">
        <InputTag
          ref={emailRef}
          placeText="Email Address"
          labelText="Email Address:"
          id="email"
          type="text"
          onChange={handleChange}
        />
        <InputTag
          ref={passwordRef}
          placeText="Password"
          labelText="Password:"
          id="password"
          type="text"
          onChange={handleChange}
        />

        <Button text="Sign In" variant="tertiary" size="lg" />
      </form>
    </div>
  );
};

export default Signin;
