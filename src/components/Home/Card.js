import React from "react";
import Image from "next/image";

// --- components
import Popover from "../Popover";

// icons
import {BookMarkIcon, DotsIcon} from "../SvgIcons"

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
            <h4 className="text-sm md:text-base font-semibold ml-2">
              {" "}
              Medium Staff{" "}
            </h4>
            <Popover>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, fugiat maiores magni magnam eum, eaque minus
                  voluptate illum et vitae doloribus vel quasi nihil in ab,
                  commodi aperiam adipisci laudantium?
                </p>
              </main>
              <footer className="flex items-center justify-between border-t-2 pt-2">
                <p className="text-sm text-gray-500">150 followers</p>
                <button className="popover__button text-sm text-white px-3 py-1 rounded-3xl">
                  Follow
                </button>
              </footer>
            </Popover>
          </div>
        </header>
        <main className="space-y-1">
          <h2 className="text-lg md:text-2xl font-bold">
            {" "}
            What We’re Reading Today{" "}
          </h2>
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
          <div className="flex items-center space-x-3">
            <button>
            <BookMarkIcon classes="h-6 w-6" />
            </button>
            <button>
            <DotsIcon classes="h-6 w-6" />
            </button>
            
            
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
