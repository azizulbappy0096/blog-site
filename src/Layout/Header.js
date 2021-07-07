import React from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import { SearchIcon, ListIcon } from "../components/SvgIcons";

// components
import Profile from "./Profile";

function Header({ children }) {
  return (
    <>
      <header className="header flex items-center justify-between w-full h-20 px-8 md:px-16">
        <nav className="">
          <Link href="/">Logo</Link>
        </nav>
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

          <Profile />
        </nav>
      </header>
      {children}
    </>
  );
}

export default Header;
