import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as actionCreators from "../../utils/redux/actionCreators";

import {
  CloseIcon,
  GoogleIcon,
  FacebookIconGreen,
  MailIcon,
} from "../SvgIcons";

const style = {
  background: "rgba(255, 255, 255, 0.95)",
};

function SignIn() {
  const dispatch = useDispatch();
  return (
    <div
      className="modal-animation fixed left-0 right-0 top-0 z-50 min-h-screen w-full"
      style={style}
    >
      <div
        className="bg-white w-full md:w-4/5 min-h-screen mx-auto"
        style={{ boxShadow: "rgb(0 0 0 / 15%) 0px 2px 10px" }}
      >
        <header className="flex justify-end items-center px-6 py-8">
          <button
            className="text-right"
            onClick={() => dispatch(actionCreators.signInModal(false))}
          >
            <CloseIcon classes="text-gray-400 h-6 w-6 " />
          </button>
        </header>
        <main className="text-center text-gray-600 px-6 md:px-24 py-8">
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
            <button className="flex items-center justify-center gap-2 px-4 py-2 w-60 border-2 border-gray-500 hover:border-gray-800 rounded-3xl">
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
      </div>
    </div>
  );
}

export default SignIn;
