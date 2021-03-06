import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as actionCreators from "../../utils/redux/actionCreators";

function Profile({ user }) {
  const dispatch = useDispatch();
  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full ">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="/sample-image.jpeg"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="origin-top-right absolute z-50 right-0 mt-2 min-w-min max-h-96 overflow-y-auto rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <ul className="py-2">
                <li className="flex items-center p-4">
                  <a href="#" className="flex">
                    <Image
                      layout="fixed"
                      width="45"
                      height="45"
                      className="rounded-full"
                      src="/sample-image.jpeg"
                      alt=""
                    />
                  </a>

                  <div className="ml-4">
                    <a href="#">
                      {" "}
                      <span>{user.name}</span>{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <span className="text-sm text-gray-400 hover:underline">
                        {user.email}
                      </span>
                    </a>
                  </div>
                </li>
                <li className="my-4 border-t-2"></li>
                <li className="px-4 py-2">
                  <div className="">
                    <Link href="/edit?type=new-post">
                    <a >
                      {" "}
                      <span className="text-gray-500 hover:text-black ">
                        Write a story
                      </span>{" "}
                    </a>
                    </Link>
                    
                  </div>
                </li>
                <li className="px-4 py-2">
                  <div className="">
                    <Link href="/user/stories/drafts">
                    <a >
                      {" "}
                      <span className="text-gray-500 hover:text-black ">
                        Stories
                      </span>{" "}
                    </a>
                    </Link>
                  </div>
                </li>
                <li className="px-4 py-2">
                  <div className="">
                    <a href="#">
                      {" "}
                      <span className="text-gray-500 hover:text-black ">
                        Settings
                      </span>{" "}
                    </a>
                  </div>
                </li>
                <li className="my-4 border-t-2"></li>


                <li className="px-4 py-1">
                  <div className="">
                    <button onClick={() => dispatch(actionCreators.logoutUser())}>
                      {" "}
                      <span className="text-gray-500 hover:text-black ">
                        Sign out
                      </span>{" "}
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default Profile;
