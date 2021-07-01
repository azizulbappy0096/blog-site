import React from "react";
import Image from "next/image";

function Card() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <section className="col-span-2 space-y-2">
        <header className="flex items-center cursor-pointer w-max">
          <Image
            src="/sample-card.png"
            layout="fixed"
            objectFit="contain"
            width="25"
            height="25"
            className="rounded-full"
          />
          <h4 className="text-base font-semibold ml-2"> Medium Staff </h4>
        </header>
        <main className="space-y-1">
          <h2 className="text-2xl font-bold"> What We’re Reading Today </h2>
          <h4 className="text-lg text-gray-500">
            {" "}
            Stories to start your day, handpicked by Medium editors{" "}
          </h4>
        </main>
        <footer className="flex justify-between">
          <p className="text-gray-500">
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
