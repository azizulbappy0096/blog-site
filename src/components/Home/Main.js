import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Image from "next/image"

// --- components
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

function Main({ blogs, user }) {
  if (user) {
    return (
      <>
        <div className="col-span-6 lg:col-span-4 lg:pr-8 lg:border-r-2 ">
          <MainLeft blogs={blogs} />
        </div>
        <div className="hidden lg:block col-span-2 pl-8">
          <MainRight />
        </div>
      </>
    );
  } else {
      return(
        <>
        <section className="relative col-span-6 flex justify-between h-60 md:h-72 w-full">
            <div className="z-10 flex-1">
                <h1 className="text-3xl md:text-5xl font-bold"> It's easy and free to post your thinking on any topic and connect with millions of readers. </h1>
            </div>
            <Image 
                layout="fill"
                src="/banner.jpg"
                className=""

            />
        </section>
      </>
      )
  }
}

export default Main;
