import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsIcon } from "../../components/SvgIcons"

function Menus({ children }) {
  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className=" flex text-sm  ">
              <span className="sr-only">Open user menu</span>
              <DotsIcon classes="h-6 w-6" />
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
            <div className="origin-center absolute z-50 right-0 mt-2 w-max rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <ul className="py-2">
                {children}
              
              </ul>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default Menus;
