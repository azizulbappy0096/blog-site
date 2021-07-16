import React, { useState } from "react";
import axios from "../../utils/axios";
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

const SignUpWithEmail = ({ back }) => {
  const [nextStep, setNextStep] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errors, setErrors] = useState({})

  // const handlePass = (e) => {
  //   let { name, value } = e.target
  //   if(name === "password") {
  //     setPassword(value)
  //   }else if(name === "rePassword") {
  //     setRePassword(value)
  //     if(value !== password) {
  //       setErrors(prev => ({...prev, rePassword: "Password didn't matched"}))
  //     }else {
  //       setErrors(prev => ({...prev, rePassword: false}))
  //     }
  //   }
  // }

  const handleContinue = () => {
    let emailReg = /^[a-z0-9_]+?@[a-z]+?\.[a-z]{2,6}(\.[a-z]{2,3})?$/

    if(emailReg.test(email)) {
      setErrors({})
      setNextStep(true)
    }else {
      setErrors({ email: "Invalid email address" })
    }
  }

  const createAccount = () => {
    let passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(name.length < 3) {
      setErrors(prev => ({...prev, name: "Name must be at least 3 characters long"}))
    }else {
      setErrors(prev => ({...prev, name: false}))
    }
    if(username.length < 3) {
      setErrors(prev => ({...prev, username: "username must be at least 3 characters long"}))
    }else {
      setErrors(prev => ({...prev, username: false}))
    }

    if(!passReg.test(password)) {
      setErrors(prev => ({...prev, password: "Invalid password, must contain 8 character (at least one letter and one number)"}))
    }else {
      setErrors(prev => ({...prev, password: false}))
    }

    if(rePassword !== password) {
      setErrors(prev => ({...prev, rePassword: "Password didn't match"}))
    }else {
      setErrors(prev => ({...prev, rePassword: false}))
    }

    let checkErrors = Object.keys(errors).filter(err => err === true)
    if(checkErrors.length === 0) {
      store.dispatch(actionCreators.registerUser({
        name, username, email, password
      }))
    }else {
      console.log("phh nop", errors, checkErrors)
    }
  }

  return (
    <main className="modal-animation text-center text-gray-600 px-6 md:px-24 py-20 h-full">
      <h1 className="text-xl md:text-3xl"> Sign in with email </h1>

      {!nextStep ? (
        <div className="modal-animation">
          <div className="my-12 md:my-16">
            <p className="text-base">
              Enter your email address to create an account.
            </p>
          </div>

          <div className="mt-8">
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

              {errors.email && <div className="text-red-700">
              <p> {errors.email} </p>
              </div>}
            </div>
          </div>

          <div className=" mt-8 md:mt-16">
            <button className="text-white text-center px-4 py-2 w-60 bg-gray-800 hover:bg-black rounded-3xl" onClick={handleContinue}>
              Continue
            </button>
          </div>
          <div className="mt-8">
            <button
              className="text-green mx-auto flex items-center justify-center gap-2"
              onClick={() => back(false)}
            >
              <ArrowLeftIcon classes=" h-6 w-6" />
              All sign up options
            </button>
          </div>
        </div>
      ) : (
        <div className="modal-animation">
          <div className="my-12 md:my-16">
            <p className="text-base">
              Fill up all the fields below
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <label className={errors.name ? "text-red-700" : ""} htmlFor="name"> Name </label>
              <input
                className={`text-center w-60 md:w-72 border-b-2 focus:outline-none ${errors.name ? "border-red-700" : "border-gray-500 hover:border-black focus:border-black"}`}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="text-red-700">
              <p> {errors.name} </p>
              </div>}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <label className={errors.username ? "text-red-700" : ""} htmlFor="username"> Username </label>
              <input
                className={`text-center w-60 md:w-72 border-b-2 focus:outline-none ${errors.username ? "border-red-700" : "border-gray-500 hover:border-black focus:border-black"}`}
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <div className="text-red-700">
              <p> {errors.username} </p>
              </div>}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <label className={errors.password ? "text-red-700" : ""} htmlFor="password"> Password </label>
              <input
                className={`text-center w-60 md:w-72 border-b-2 focus:outline-none ${errors.password ? "border-red-700" : "border-gray-500 hover:border-black focus:border-black"}`}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="text-red-700">
              <p> {errors.password} </p>
              </div>}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <label className={errors.pasword || errors.rePassword ? "text-red-700" : ""} htmlFor="rePassword"> Confirm Password </label>
              <input
               className={`text-center w-60 md:w-72 border-b-2 focus:outline-none ${errors.password || errors.rePassword ? "border-red-700" : "border-gray-500 hover:border-black focus:border-black"}`}
                type="password"
                name="rePassword"
                id="rePassword"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              {errors.rePassword && <div className="text-red-700">
              <p> {errors.rePassword} </p>
              </div>}
            </div>
          </div>

          <div className=" mt-8 md:mt-16">
            <button className="text-white text-center px-4 py-2 w-60 bg-gray-800 hover:bg-black rounded-3xl" onClick={createAccount}>
              Create account
            </button>
          </div>
          <div className="mt-8">
            <button
              className="text-green mx-auto flex items-center justify-center gap-2"
              onClick={() => setNextStep(false)}
            >
              <ArrowLeftIcon classes=" h-6 w-6" />
              Previous step
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

function SignUp() {

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
            onClick={() => store.dispatch(actionCreators.signUpModal(false))}
          >
            <CloseIcon classes="text-gray-400 h-6 w-6" />
          </button>
        </header>
        {!optMail ? (
          <main className="modal-animation text-center text-gray-600 px-6 md:px-24 py-20">
            <h1 className="text-xl md:text-3xl"> Join Medium. </h1>

            <div className="flex flex-col justify-center items-center gap-4 mt-8 md:mt-16">
              <button className="flex items-center justify-center gap-2 px-4 py-2 w-60 border-2 border-gray-500 hover:border-gray-800 rounded-3xl">
                <GoogleIcon styles={{ width: 25, height: 25 }} />
                Sign up with Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 w-60 border-2 border-gray-500 hover:border-gray-800 rounded-3xl">
                <FacebookIconGreen styles={{ width: 25, height: 25 }} />
                Sign up with Facebook
              </button>
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 w-60 border-2 border-gray-500 hover:border-gray-800 rounded-3xl"
                onClick={() => handleOptMail(true)}
              >
                <MailIcon styles={{ width: 25, height: 25 }} />
                Sign up with Email
              </button>
            </div>
            <div className="my-16">
              <p className="text-lg">
                {" "}
                Already have and account?{" "}
                <button
                  className="inline text-green font-semibold"
                  onClick={() => {
                    store.dispatch(actionCreators.signInModal(true));
                    store.dispatch(actionCreators.signUpModal(false));
                  }}
                >
                  Sign in{" "}
                </button>
              </p>
            </div>

            <div className="mt-8">
              <p>
                {" "}
                Click “Sign Up” to agree to Medium’s{" "}
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
          <SignUpWithEmail back={handleOptMail} />
        )}
      </div>
    </div>
  );
}

export default SignUp;
