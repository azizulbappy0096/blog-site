import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// redux
import * as actionCreators from "../utils/redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

// icons
import { SearchIcon, ListIcon } from "../components/SvgIcons";

// components
import Profile from "../components/Header/Profile";
import SignUp from "../components/Header/SignUp";
import SignIn from "../components/Header/SignIn";

const WithoutUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <header className="header z-40 flex items-center justify-between w-full h-20 px-8 md:px-20 lg:px-44">
      <nav className="flex items-center gap-4">
        <Link href="/">
          <a>Logo</a>
        </Link>
      </nav>
      <nav className="flex items-center space-x-4">
        <button
          className="hidden md:block"
          onClick={() => dispatch(actionCreators.signInModal(true))}
        >
          Sign in
        </button>
        <button
          className="text-white px-3 py-2 bg-black rounded-3xl"
          onClick={() => dispatch(actionCreators.signUpModal(true))}
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

const WithUser = ({ inDraftEditor, user }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <header className="header z-40 flex items-center justify-between w-full h-20 px-8 md:px-20 lg:px-44">
      <nav className="flex items-center gap-4">
        {router.pathname !== "/edit" ? (<Link href="/">
          <a>Logo</a>
        </Link>) : inDraftEditor()}
        
        
      </nav>
      {router.pathname === "/edit" ? (
        <nav className="flex items-center space-x-4">
      

        <button
          className={`${
            router.pathname === "/edit" ? "" : "hidden"
          } text-white text-sm px-4 py-1 bg-green-600 hover:bg-green-700 rounded-2xl transition-colors duration-200 ease-in-out`}
          onClick={() => dispatch(actionCreators.editorModal())}
        >
          Publish
        </button>

        <Link href="/">
          <a>Logo</a>
        </Link>
      </nav>
      ) : (
        <nav className="flex items-center space-x-4">
      
        <Link href="#">
          <a>
            <SearchIcon classes="h-8 w-8" />
          </a>
        </Link>

        <Link href="#">
          <a>
            <ListIcon classes="h-8 w-8" />
          </a>
        </Link>

        <Profile user={user} />

      </nav>
      )}
     
      
    </header>
  );
};

function Header({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const saveStatus = useSelector((state) => state.editor.saveStatus);
  const auth = useSelector((state) => state.auth);



  const inDraftEditor = () => {
    let text = "";
    if (router.pathname === "/edit" && router.query.type === "new-post") {
      text = `Draft in ${auth.user.name}`
    }else if(router.pathname === "/edit" && router.query.id) {
      text = auth.user.name
    }

    return (
      <div className="flex items-center space-x-4">
        <h2 className="text-xl md:text-2xl text-gray-900"> {text} </h2>
        <p className="text-base text-gray-400">
          {" "}
          {!saveStatus ? "" : saveStatus}{" "}
        </p>
      </div>
    );



  };

  return (
    <>
      {auth.user ? <WithUser inDraftEditor={inDraftEditor} user={auth.user} /> : <WithoutUser />}

      {auth.isSignIn ? <SignIn /> : ""}
      {auth.isSignUp && <SignUp />}
      {children}
    </>
  );
}

export default Header;
