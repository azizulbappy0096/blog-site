import React from "react";
import Image from "next/image";

// --- components
import TitleSection from "./TitleSection";
import Content from "./Content/Content";
import Bottom from "./Bottom/Bottom";

function Tags({ children }) {
  return (
    <div className="mt-12 lg:w-2/3 mx-auto">
      <ul className="flex flex-wrap space-x-2">{children}</ul>
    </div>
  );
}

function Main({ blog }) {
  return (
    <div className="container px-4 md:px-16 my-8 mx-auto min-h-screen">
      <TitleSection title={blog.title} createdAt={blog.createdAt} />
      <section className="mt-6">
        <article
          className="lg:w-2/3 mt-12 mx-auto"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        ></article>
        <Tags>
            {blog.tags.map((tag, idx) => (
                <li key={idx} className="p-2 mb-2 bg-gray-200 min-w-min"> {tag} </li>
            ))}
          

        </Tags>
      </section>
      <Bottom />
    </div>
  );
}

export default Main;
