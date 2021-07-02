import React from "react";
import Image from "next/image";

// --- components
import Popover from "../Popover";

function Card() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <section className="col-span-2 space-y-2">
        <header className="relative flex items-center cursor-pointer w-max">
          <Image
            src="/sample-card.png"
            layout="fixed"
            objectFit="contain"
            width="25"
            height="25"
            className="rounded-full"
          />
          <div className="popover-text static">
          <h4 className="text-sm md:text-base font-semibold ml-2"> Medium Staff </h4>
          <Popover />
          </div>
         
        </header>
        <main className="space-y-1">
          <h2 className="text-lg md:text-2xl font-bold"> What We’re Reading Today </h2>
          <h4 className="text-base md:text-lg text-gray-500">
            {" "}
            Stories to start your day, handpicked by Medium editors{" "}
          </h4>
        </main>
        <footer className="flex justify-between">
          <p className="text-sm md:text-base text-gray-500">
            {" "}
            Jul 1 · 2 min read · From your network
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </footer>
      </section>
      <section className="relative">
        <Image
          src="/sample-card.png"
          layout="fill"
          objectFit="contain"
          className="left-0"
        />
      </section>
    </div>
  );
}

export default Card;
