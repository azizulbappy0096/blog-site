import Head from "next/head";
import { useState } from "react";
import Link from "next/link";


// --- components
import { CameraIcon } from "../../components/SvgIcons";

let notActive = {
  display: "none",
  opacity: 0,
};

let active = {
  opacity: 1,
};

export default function Settings() {
  const [name, setName] = useState("Azizul Islam");
  const [bio, setBio] = useState("Test bio");
  const [username, setUsername] = useState("username");
  const [email, setEmail] = useState("email@");
  const [password, setPassword] = useState("passowrd");

  // edit mode
  const [edit, setEdit] = useState({
    name: false,
    username: false,
    email: false,
    password: false,
    bio: false,
    photo: false,
  });

  const handleEditMode = (e, type) => {
    let inputs = Array.from(document.querySelectorAll("input"))
    inputs.map(inp => {
      if(inp.name === type) {
        inp.focus()
        // inp.setCursorToTextEnd()
      }
    })

    setEdit((prev) => ({ ...prev, [type]: !prev[type] }));
    
  };



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

        <ul className="mt-8 space-y-12">
          <li className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold "> Name</h3>

              <div className="mt-4">
                <p className="sr-only"></p>
                <input
                  className={`w-full text-lg py-1 border-b-2 ${edit.name ? "border-gray-700" : "border-gray-100"} focus:outline-none`}
                  readOnly={!edit.name}
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <p className="text-base mt-6  leading-6">
                Your name appears on your{" "}
                <Link href="#">
                  <a className="underline">Profile</a>
                </Link>{" "}
                page, as your byline, and in your responses. It is a required
                field.
              </p>
            </div>

            <div className="flex justify-end gap-4" style={{ flex: "0.4" }}>
              <button
                className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                style={!edit.name ? active : notActive}
                onClick={(e) => handleEditMode(e, "name")}
              >
                {" "}
                Edit{" "}
              </button>
              <div className="space-x-3" style={edit.name ? active : notActive}>
                <button className="text-green-600 hover:text-green-700 px-4 py-2 border-2 rounded-3xl  border-green-600 hover:green-700 transition-all duration-200 ease-linear">
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                  onClick={(e) => handleEditMode(e, "name")}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
          </li>

          {/*  */}

          <li className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold "> Bio</h3>

              <div className="mt-4">
                <p className="sr-only"></p>
                <input
                  className={`w-full text-lg py-1 border-b-2 ${edit.bio ? "border-gray-700" : "border-gray-100"} focus:outline-none`}
                  readOnly={!edit.bio}
                  type="text"
                  name="bio"
                  autoFocus={edit.bio}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

              <p className="text-sm mt-6 leading-6">
                Your bio appears on your{" "}
                <Link href="#">
                  <a className="underline">Profile</a>
                </Link>{" "}
                and next to your stories. Max 160 characters.
              </p>
            </div>

            <div className="flex justify-end gap-4" style={{ flex: "0.4" }}>
              <button
                className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                style={!edit.bio ? active : notActive}
                onClick={(e) => handleEditMode(e, "bio")}
              >
                {" "}
                Edit{" "}
              </button>
              <div className="space-x-3" style={edit.bio ? active : notActive}>
                <button className="text-green-600 hover:text-green-700 px-4 py-2 border-2 rounded-3xl  border-green-600 hover:green-700 transition-all duration-200 ease-linear">
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                  onClick={(e) => handleEditMode(e, "bio")}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
          </li>

          {/*  */}

          <li className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex items-center flex-1 gap-8 text-gray-700">
              <div className="space-y-4">
                <h3 className="text-2xl  font-semibold "> Photo </h3>
                <p>
                  Your photo appears on your{" "}
                  <Link href="#">
                    <a className="underline">Profile</a>
                  </Link>{" "}
                  page and with your stories across Medium.
                </p>
                <p>
                  Recommended size: Square, at least 1000 pixels per side. File
                  type: JPG, PNG or JPEG.
                </p>
              </div>

              <div className="relative flex-shrink-0 w-20 md:w-24 h-20 md:h-24 rounded-full overflow-hidden">
                <img
                  src="/sample-image.jpeg"
                  className="w-full h-full"
                  alt="profile photo"
                  style={
                    edit.photo
                      ? { filter: "", filter: "brightness(0.5)" }
                      : { opacity: 1 }
                  }
                />
                <CameraIcon
                  classes="text-white w-16 md:w-20 h-16 md:h-20 absolute inset-0 transform translate-x-2  translate-y-2 transition-all duration-400 ease-linear"
                  styles={edit.photo ? { opacity: 1 } : { opacity: 0 }}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4" style={{ flex: "0.4" }}>
              <button
                className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                style={!edit.photo ? active : notActive}
                onClick={(e) => handleEditMode(e, "photo")}
              >
                {" "}
                Edit{" "}
              </button>
              <div
                className="space-x-3"
                style={edit.photo ? active : notActive}
              >
                <button className="text-green-600 hover:text-green-700 px-4 py-2 border-2 rounded-3xl  border-green-600 hover:green-700 transition-all duration-200 ease-linear">
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                  onClick={(e) => handleEditMode(e, "photo")}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
          </li>
        </ul>
        {/* */}

        <div className="mt-16 pb-6 border-b-2">
          <h2 className="text-3xl text-gray-700 font-semibold "> Account </h2>
        </div>

        <ul className="mt-8 space-y-12">
          <li className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold "> Username </h3>

              <div className="mt-4">
                <p className="sr-only"></p>
                <input
                  className={`w-full text-lg py-1 border-b-2 ${edit.username ? "border-gray-700" : "border-gray-100"} focus:outline-none`}
                  readOnly={!edit.username}
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4" style={{ flex: "0.4" }}>
              <button
                className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                style={!edit.username ? active : notActive}
                onClick={(e) => handleEditMode(e, "username")}
              >
                {" "}
                Edit{" "}
              </button>
              <div
                className="space-x-3"
                style={edit.username ? active : notActive}
              >
                <button className="text-green-600 hover:text-green-700 px-4 py-2 border-2 rounded-3xl  border-green-600 hover:green-700 transition-all duration-200 ease-linear">
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                  onClick={(e) => handleEditMode(e, "username")}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
          </li>

          {/*  */}

          <li className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold "> E-mail </h3>

              <div className="mt-4">
                <p className="sr-only"></p>
                <input
                  className={`w-full text-lg py-1 border-b-2 ${edit.email ? "border-gray-700" : "border-gray-100"} focus:outline-none`}
                  readOnly={!edit.email}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4" style={{ flex: "0.4" }}>
              <button
                className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                style={!edit.email ? active : notActive}
                onClick={(e) => handleEditMode(e, "email")}
              >
                {" "}
                Edit{" "}
              </button>
              <div
                className="space-x-3"
                style={edit.email ? active : notActive}
              >
                <button className="text-green-600 hover:text-green-700 px-4 py-2 border-2 rounded-3xl  border-green-600 hover:green-700 transition-all duration-200 ease-linear">
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                  onClick={(e) => handleEditMode(e, "email")}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
          </li>

          {/*  */}
          <li className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold "> Password </h3>

              <div className="mt-4">
                <p className="sr-only"></p>
                <input
                  className={`w-full text-lg py-1 border-b-2 ${edit.password ? "border-gray-700" : "border-gray-100"} focus:outline-none`}
                  readOnly={!edit.password}
                  type={edit.password ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4" style={{ flex: "0.4" }}>
              <button
                className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                style={!edit.password ? active : notActive}
                onClick={(e) => handleEditMode(e, "password")}
              >
                {" "}
                Edit{" "}
              </button>
              <div
                className="space-x-3"
                style={edit.password ? active : notActive}
              >
                <button className="text-green-600 hover:text-green-700 px-4 py-2 border-2 rounded-3xl  border-green-600 hover:green-700 transition-all duration-200 ease-linear">
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear"
                  onClick={(e) => handleEditMode(e, "password")}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
          </li>
        </ul>
        {/*  */}

        <div className="mt-16 pb-6 border-b-2">
          <h2 className="text-3xl text-gray-700 font-semibold "> Security </h2>
        </div>

        <ul className="mt-8 space-y-12">
          <li className="flex flex-col md:flex-row items-baseline justify-between gap-3 md:gap-0 pb-6 border-b-2">
            <div className="flex-1 text-gray-700">
              <h3 className="text-2xl  font-semibold ">
                {" "}
                Sign out of all other sessions{" "}
              </h3>

              <div className="mt-4">
                <p className="text-base mt-6  leading-6">
                  This will sign you out of sessions in other browsers or on
                  other computers..
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button className="text-gray-400 px-4 py-2 border-2 rounded-3xl hover:text-gray-600 hover:border-gray-600 transition-all duration-200 ease-linear">
                Sign out other sessions
              </button>
            </div>
          </li>

          {/*  */}
          <li className="text-gray-700 pb-6 border-b-2">
            <h3 className="text-2xl  font-semibold "> Deactivate account </h3>

            <div className="mt-4">
              <p className="text-base mt-6  leading-6">
                Deactivating your account will remove it from Medium within a
                few minutes. You can sign back in anytime to reactivate your
                account and restore its content.
              </p>
            </div>

            <button className="underline text-gray-400 hover:text-red-600 mt-4 transition-colors duration-300 ease-linear">
              Deactivate account
            </button>
          </li>
          <li className="text-gray-700 pb-6">
            <h3 className="text-2xl  font-semibold "> Delete account </h3>

            <div className="mt-4">
              <p className="text-base mt-6  leading-6">
                Permanently delete your account and all of your content.
              </p>
            </div>

            <button className="underline text-gray-400 hover:text-red-600 mt-4 transition-colors duration-300 ease-linear">
              Delete account
            </button>
          </li>
        </ul>
      </main>
    </>
  );
}
