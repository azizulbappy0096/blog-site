import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import store from "../../utils/redux/reduxStore"
import * as actionCreators from "../../utils/redux/actionCreators";

import {
  CloseIcon,
  GoogleIcon,
  FacebookIconGreen,
  MailIcon,
  ArrowLeftIcon,
} from "../SvgIcons";

const style = {
  background: "rgba(255, 255, 255, 0.95)",
};

function SignInWithEmail({ back }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})

const handleSignIn = () => {
console.log(email, password)
  if(email && password) {
    store.dispatch(actionCreators.loginUser({
      email, password
    }))
  }else {
    setErrors({
      email: true,
      password: true
    })
    console.log(errors)
  }


}

  return(
    <main className="modal-animation text-center text-gray-600 px-6 md:px-24 py-20 h-full">
    <h1 className="text-xl md:text-3xl"> Sign up with email </h1>
    <div className="modal-animation">
          <div className="my-12 md:my-16">
            <p className="text-base">
              Enter your credentials to continue
            </p>
          </div>

          <div className="mt-8  space-y-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <label className={errors.email ? "text-red-700" : ""} htmlFor="email"> Your Email </label>
              <input
                className={`text-center w-60 md:w-72 border-b-2 focus:outline-none ${errors.email ? "border-red-700" : "border-gray-500 hover:border-black focus:border-black"}`}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <label className={errors.password ? "text-red-700" : ""} htmlFor="password"> Your Password </label>
              <input
                className={`text-center w-60 md:w-72 border-b-2 focus:outline-none ${errors.password ? "border-red-700" : "border-gray-500 hover:border-black focus:border-black"}`}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className=" mt-8 md:mt-16">
            <button className="text-white text-center px-4 py-2 w-60 bg-gray-800 hover:bg-black rounded-3xl" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
          <div className="mt-8">
            <button
              className="text-green mx-auto flex items-center justify-center gap-2"
              onClick={() => back(false)}
            >
              <ArrowLeftIcon classes=" h-6 w-6" />
              All sign in options
            </button>
          </div>
        </div>
        </main>
  )
}

function SignIn() {
  const dispatch = useDispatch();
  const [optMail, setOptMail] = useState(false);
  const handleOptMail = (val) => {
    setOptMail(val);
  };
  return (
    <div
    className="modal-animation fixed inset-0 z-50 min-h-screen w-full overflow-y-auto"
    style={style}
    >
      <div
        className="relative bg-white w-full md:w-4/5 min-h-screen mx-auto flex flex-col justify-center"
        style={{ boxShadow: "rgb(0 0 0 / 15%) 0px 2px 10px" }}
      >
        <header className="absolute z-50 right-4 top-2 px-6 py-8">
          <button
            className="text-right"
            onClick={() => dispatch(actionCreators.signInModal(false))}
          >
            <CloseIcon classes="text-gray-400 h-6 w-6 " />
          </button>
        </header>
        {!optMail ? (
        <main className="modal-animation text-center text-gray-600 px-6 md:px-24 py-20">
          <h1 className="text-xl md:text-3xl"> Welcome back </h1>

          <div className="flex flex-col justify-center items-center gap-4 mt-8 md:mt-16">
            <button className="flex items-center justify-center gap-2 px-4 py-2 w-60 border-2 border-gray-500 hover:border-gray-800 rounded-3xl">
              <GoogleIcon styles={{ width: 25, height: 25 }} />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 w-60 border-2 border-gray-500 hover:border-gray-800 rounded-3xl">
              <FacebookIconGreen styles={{ width: 25, height: 25 }} />
              Sign in with Facebook
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 w-60 border-2 border-gray-500 hover:border-gray-800 rounded-3xl" onClick={() => handleOptMail(true)}>
              <MailIcon styles={{ width: 25, height: 25 }} />
              Sign in with Email
            </button>
          </div>
          <div className="my-16">
            <p className="text-lg">
              No account?{" "}
              <button className="inline text-green font-semibold" onClick={() => {dispatch(actionCreators.signUpModal(true));dispatch(actionCreators.signInModal(false))}}>
                Create one{" "}
              </button>
            </p>
          </div>

          <div className="mt-8">
            <p>
              {" "}
              Click “Sign In” to agree to Medium’s{" "}
              <a href="#" className="underline">
                {" "}
                Terms of Service{" "}
              </a>{" "}
              and acknowledge that Medium’s{" "}
              <a href="#" className="underline">
                {" "}
                Privacy Policye{" "}
              </a>{" "}
              applies to you.{" "}
            </p>
          </div>
        </main>
        ) : (
          <SignInWithEmail back={handleOptMail} />
          
        )}
      </div>
    </div>
  );
}

export default SignIn;
