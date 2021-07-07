import React, { Fragment } from "react";
import { Popover, Menu, Transition } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Profile() {
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
            <div className="origin-top-right absolute right-0 mt-2 w-60 max-h-80 overflow-y-auto rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                      <span>Azizul Bappy</span>{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <span className="text-gray-400 hover:underline">
                        azizul@gmail.com
                      </span>
                    </a>
                  </div>
                </li>
                <li className="my-4 border-t-2"></li>
                <li className="px-4 py-2">
                  <div className="">
                    <a href="#">
                      {" "}
                      <span className="text-gray-500 hover:text-black ">
                        Write a story
                      </span>{" "}
                    </a>
                  </div>
                </li>
                <li className="px-4 py-2">
                  <div className="">
                    <a href="#">
                      {" "}
                      <span className="text-gray-500 hover:text-black ">
                        Stories
                      </span>{" "}
                    </a>
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
                    <a href="#">
                      {" "}
                      <span className="text-gray-500 hover:text-black ">
                        Sign out
                      </span>{" "}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items> */}
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default Profile;
