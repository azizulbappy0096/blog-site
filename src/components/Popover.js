import React from "react";
import Image from "next/image";

function Popover() {
  return (
    <div
      className="popover absolute w-72 px-4 py-4 bg-white rounded-md shadow-md space-y-3"
    >
      <header className="relative flex items-center cursor-pointer w-max">
        <div className="popover__image rounded-full p-1">
        <img
          src="/sample-card.png"
          width="35"
          height="35"
          className="rounded-full object-contain"
        />
        </div>
        <h4 className="text-lg font-semibold ml-2"> Medium Staff </h4>
      </header>
      <main className="space-y-1 text-sm leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          fugiat maiores magni magnam eum, eaque minus voluptate illum et vitae
          doloribus vel quasi nihil in ab, commodi aperiam adipisci laudantium?
        </p>
      </main>
      <footer className="flex items-center justify-between border-t-2 pt-2">
        <p className="text-sm text-gray-500">150 followers</p>
        <button className="popover__button text-sm text-white px-3 py-1 rounded-3xl">Follow</button>
      </footer>
    </div>
  );
}

export default Popover;
