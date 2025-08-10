import { useRef, type FormEvent } from "react"
import Button from "../ui/Button"
import InputTag from "../ui/InputTag"
import { signup } from "../../services/operations/auth";

const Signup = () => {
    const userNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const conPassRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {

    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = userNameRef.current?.value || ""; 
        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";
        const conPassword = conPassRef.current?.value || "";

        const response = await signup({username, email, password, conPassword});
        console.log("RESPONSE,", response);
    }
  return (
    <div className="flex flex-col h-[100%] px-16  justify-center ">
        <p className="text-3xl">Start Building Your Digital Mind</p>
        <p className="italic mb-10">Sign up to create your personal hub where inspiration never gets lost.</p>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 md:mr-28">
            <InputTag onChange={handleChange} ref={userNameRef} placeText="Username" labelText="Username:" id="Username" type="text"/>
            <InputTag onChange={handleChange} ref={emailRef} placeText="Email Address" labelText="Email Address:" id="email" type="text"/>
            <InputTag onChange={handleChange} ref={passwordRef} placeText="Password" labelText="Password:" id="password" type="text"/>
            <InputTag onChange={handleChange} ref={conPassRef} placeText="Confirm Password" labelText="Confirm Password:" id="conPassword" type="text"/>
            <Button text="Sign Up" varient="tertiary" size="lg"/>
        </form>
    </div>
  )
}

export default Signup