import React from "react";
import Link from "next/link";

// --- components
import Card from "./Card";

const PostBlog = () => {
  return (
    <section className="flex text-center items-center justify-center flex-wrap bg-gray-100 rounded-lg px-4 py-4 my-10">
      <div className="text-lg text-gray-700 mx-2 my-2">
        <span>Post a quick thought or a long story. It's easy and free.</span>
      </div>
      <Link href="/edit?type=new-post">
        <a className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 my-2 rounded-3xl">
          Write on Medium
        </a>
      </Link>
    </section>
  );
};

function MainLeft() {
  return (
    <>
      <section className="flex items-center w-full py-4 pb-6 border-b-2 cursor-pointer">
        <div className="bg-gray-100 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div className="ml-4">
          <span className="text-lg text-gray-700 hover:text-black">
            {" "}
            Keep up with the latest in any topic{" "}
          </span>
        </div>
      </section>

      <section className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-6 my-10">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg text-gray-700 mx-2">
            When you follow <b> writers </b>, <b>publications</b>, and{" "}
            <b>topics</b>, their stories will appear here.
          </span>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </section>

      <section className="space-y-16">
        <Card />
        <Card />
        <Card />
        <PostBlog />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default MainLeft;
