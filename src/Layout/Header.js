import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// redux
import * as actionCreators from "../utils/redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

// icons
import { SearchIcon, ListIcon } from "../components/SvgIcons";

// components
import Profile from "./Profile";

function Header({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const saveStatus = useSelector(state => state.editor.saveStatus)

  const inDraftEditor = () => {
    if (router.pathname === "/edit") {
      return (
        <div className="flex items-center space-x-4">
          <p className="text-base text-gray-900"> Draft in AzizulBappy </p>
          <p className="text-base text-gray-400"> { !saveStatus ? "" : saveStatus } </p>
        </div>
      );
    }
  };

  return (
    <>
      <header className="header z-40 flex items-center justify-between w-full h-20 px-8 md:px-20 lg:px-44">
        <nav className="flex items-center gap-4">
          <Link href="/">
            <a>Logo</a>
          </Link>
          {inDraftEditor()}
        </nav>
        <nav className="flex items-center space-x-4">
          <Link href="#">
            <a className={router.pathname === "/edit" ? "hidden" : ""}>
              <SearchIcon classes="h-8 w-8" />
            </a>
          </Link>

          <button
            className={`${
              router.pathname === "/edit" ? "" : "hidden"
            } text-white text-sm px-4 py-1 bg-green-600 hover:bg-green-700 rounded-2xl transition-colors duration-200 ease-in-out`}
            onClick={() => dispatch(actionCreators.editorModal())}
          >
            Publish
          </button>

          <Link href="#">
            <a>
              <ListIcon classes="h-8 w-8" />
            </a>
          </Link>

          <Profile />
        </nav>
      </header>
      {children}
    </>
  );
}

export default Header;
