import React from "react";
import Image from "next/image";

// --- icons
import {
  ClapIcon,
  CommentsIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  SaveIcon,
} from "../../SvgIcons";

function Author() {
  return (
    <div className="flex items-start ">
      <img
        src="/sample-card.png"
        width="100"
        height="100"
        className="rounded-full"
      />

      <div className="ml-3">
        <p className="tracking-widest uppercase text-gray-400"> WRITTEN BY </p>
        <div className="flex items-center justify-start md:justify-between">
          <h3 className="text-xl font-semibold mt-1">
            <a className="" href="#">
              Azizul Islam
            </a>
          </h3>
          <button className="follow-button text-sm text-white px-3 py-1 rounded-3xl ml-2">
            Follow
          </button>
        </div>

        <div className="text-lg text-gray-500 mt-3">
          <span>
            Conquer on the words. Writer| Designer| Entrepreneur| Business
            Analyst
          </span>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <section className="md:w-2/3 mx-auto mt-8">
      <div className="flex items-center justify-between">
        <div className="flex space-x-5">
          <div className="flex items-center space-x-1">
            <button>
              <ClapIcon />
            </button>
            <button>123</button>
          </div>
          <div className="flex items-center space-x-1">
            <button>
              <CommentsIcon />
            </button>
            <button>23</button>
          </div>
        </div>
        <div className="flex space-x-2">
          <a href="#">
            <TwitterIcon classes="fill-gray" />
          </a>
          <a href="#">
            <LinkedinIcon classes="fill-gray" />
          </a>
          <a href="#">
            <FacebookIcon classes="fill-gray" />
          </a>
          <a href="#">
            <SaveIcon />
          </a>
        </div>
      </div>

      <div className="my-8 py-8 border-t-2">
        <Author />
      </div>
    </section>
  );
}

export default Bottom;
