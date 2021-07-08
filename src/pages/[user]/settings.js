import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --- components

export default function () {
  const [name, setName] = useState("Azizul Islam");
  const [bio, setBio] = useState("Test bio");

  // edit mode
  const [edit, setEdit] = useState({
      name: false,
      bio: false,
      photo: false,
  })

  const handleEditMode = (e, type) => {
    setEdit(prev => ({...prev, type: !prev.type}))
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:container lg:w-2/3 px-4 md:px-8 lg:px-16 my-8 mx-auto">
        <div className="pt-8 pb-6 border-b-2">
          <h2 className="text-3xl text-gray-700 font-semibold "> Profile </h2>
        </div>

        <div className="mt-8 space-y-12">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold "> Name</h3>

              <div className="mt-4">
                <p className="sr-only"></p>
                <input
                  className="w-full md:w-2/3 text-lg py-1 border-b-2 border-gray-100 focus:outline-none"
                  readOnly
                  type="text"
                  value={name}
                />
              </div>

              <p className="text-sm mt-6 md:w-2/4 leading-6">
                Your name appears on your{" "}
                <Link href="#">
                  <a className="underline">Profile</a>
                </Link>{" "}
                page, as your byline, and in your responses. It is a required
                field.
              </p>
            </div>

            <div className="space-x-3">
              <button className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear">
                {" "}
                Edit{" "}
              </button>
              <button className="text-green-600 hover:text-green-700 px-4 py-2 border-2 rounded-3xl  border-green-600 hover:green-700 transition-all duration-200 ease-linear">
                {" "}
                Save{" "}
              </button>
              <button className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear">
                {" "}
                Cancel{" "}
              </button>
            </div>
          </div>

          {/*  */}

          <div className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold "> Bio</h3>

              <div className="mt-4">
                <p className="sr-only"></p>
                <input
                  className="w-full md:w-2/3 text-lg py-1 border-b-2 border-gray-100 focus:outline-none"
                  readOnly
                  type="text"
                  value={bio}
                />
              </div>

              <p className="text-sm mt-6 md:w-2/4 leading-6">
                Your bio appears on your{" "}
                <Link href="#">
                  <a className="underline">Profile</a>
                </Link>{" "}
                and next to your stories. Max 160 characters.
              </p>
            </div>

            <div>
              <button className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear">
                {" "}
                Edit{" "}
              </button>
            </div>
          </div>

          {/*  */}

          <div className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex items-center gap-8 flex-1 text-gray-700">
              <div className="space-y-4">
              <h3 className="text-2xl  font-semibold "> Photo </h3>
                <p>
                  Your photo appears on your <Link href="#">
                  <a className="underline">Profile</a>
                </Link>{" "} page and with your stories
                  across Medium.
                </p>
                <p>
                  Recommended size: Square, at least 1000 pixels per side. File
                  type: JPG, PNG or JPEG.
                </p>
              </div>

              <div className="relative">
                    <img
                        src="/sample-image.jpeg" 
                        className="w-14 md:w-20 h-14 md:h-20 rounded-full"
                    />
              </div>
            </div>

            <div>
              <button className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear">
                {" "}
                Edit{" "}
              </button>
            </div>
          </div>

          {/*  */}
        </div>
      </main>
    </>
  );
}