import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import { BookMarkIcon } from "../SvgIcons";

function RecTopic() {
  return (
    <ul className="flex flex-wrap gap-4 tracking-tight">
      <li className="px-4 py-2 rounded-3xl bg-gray-100">
        <Link href="#">
          <a> JavaScript </a>
        </Link>
      </li>
      <li className="px-4 py-2 rounded-3xl bg-gray-100">
        <Link href="#">
          <a> ReactJs </a>
        </Link>
      </li>
      <li className="px-4 py-2 rounded-3xl bg-gray-100">
        <Link href="#">
          <a> NodeJs </a>
        </Link>
      </li>
      <li className="px-4 py-2 rounded-3xl bg-gray-100">
        <Link href="#">
          <a> Machine Learning </a>
        </Link>
      </li>
    </ul>
  );
}

function User() {
  return (
    <div className="flex items-center gap-6">
      <Link href="#">
        <a className="">
          <Image
            src="/sample-image.jpeg"
            className="rounded-full"
            layout="fixed"
            width="50"
            height="50"
            objectFit="cover"
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <h2
            className="truncate-text text-lg font-semibold h-5"
            style={{ "-webkit-line-clamp": "1" }}
          >
            {" "}
            Azizul Islam{" "}
          </h2>

          <small
            className="truncate-text text-gray-400 h-5"
            style={{ "-webkit-line-clamp": "1" }}
          >
            {" "}
            Editor @PlainEnglish.io{" "}
          </small>
        </a>
      </Link>

      <button className="capitalize px-4 py-1 border-2 hover:border-gray-500 transition-all ease-linear duration-200 rounded-lg">
        Follow
      </button>
    </div>
  );
}

function MainRight() {
  const container = useRef(null);

  return (
    <section ref={container} className="sticky top-28">
      <div className="space-y-6">
        <h3 className="uppercase text-sm text-gray-400 tracking-widest ">
          {" "}
          RECOMMENDED TOPICS{" "}
        </h3>
        <RecTopic />
      </div>
      <div className="my-14 border-t-2"></div>
      <div className="space-y-6">
        <h3 className="uppercase text-sm text-gray-400 tracking-widest ">
          {" "}
          Who to follow{" "}
        </h3>
        <User />
        <User />
        <User />
      </div>
      <div className="my-14 border-t-2"></div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h2 className="uppercase text-lg font-semibold text-gray-800 tracking-tighter ">
            Bookmark stories for later
          </h2>
          <BookMarkIcon classes="h-6 w-5" />
        </div>
        <p className="text-gray-400">
          Start saving stories by clicking the bookmark icon and you’ll find
          them all here.
        </p>
      </div>
    </section>
  );
}

export default MainRight;
