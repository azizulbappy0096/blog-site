import React, { useEffect, useRef, useState } from "react";

// redux
import * as actionCreators from "../../utils/redux/actionCreators"
import { useSelector, useDispatch } from "react-redux"

// icons
import { CloseIcon } from "../SvgIcons";

function Modal() {
  const tags = useRef(null);
  const dispatch = useDispatch()
  const open = useSelector(state => state.editor.modal)
  let [tagCount, setTagCount] = useState(0);

  useEffect(() => {
    document.execCommand("defaultParagraphSeparator", true, "p");
  }, []);

  const handleTags = (e) => {
    let key = e.key;
    let selected = window.getSelection();
    console.log(selected);
    if (key === "Enter") {
      e.preventDefault();
      if (tagCount < 5 && selected.baseNode.textContent.length > 0) {
        let innerContent = selected.anchorNode.textContent;

        let div = document.createElement("div");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let nextTag = document.createElement("p");

        div.classList.add(
          "flex",
          "items-center",
          "gap-2",
          "p-2",
          "bg-white",
          "border-2"
        );
        div.setAttribute("contentEditable", false);

        p.textContent = innerContent;
        button.textContent = "x";

        button.onclick = (e) => {
          e.preventDefault();
          setTagCount((prev) => prev - 1);
          console.log(tags);
          e.path[0].parentElement.remove();

          if (tags.current.lastChild.nodeName !== "P") {
            tags.current.append(nextTag);

            var range = document.createRange();

            range.setStart(tags.current.childNodes[tagCount], 0);
            range.collapse(true);

            selected.removeAllRanges();
            selected.addRange(range);
          }
        };

        div.append(p);
        div.append(button);
        tags.current.append(div);
        selected.anchorNode.parentNode.nodeName === "P"
          ? tags.current.removeChild(selected.anchorNode.parentNode)
          : tags.current.removeChild(selected.anchorNode);

        if (tagCount < 4) {
          tags.current.append(nextTag);
          var range = document.createRange();

          range.setStart(tags.current.childNodes[tagCount + 1], 0);
          range.collapse(true);

          selected.removeAllRanges();
          selected.addRange(range);
        }

        setTagCount((prev) => prev + 1);
      }
    } else if (
      key === "Backspace" &&
      selected.baseNode.textContent.length === 0
    ) {
      e.preventDefault();
    }
  };

  return (
    <section className="fixed left-0 right-0 z-50 px-8 md:px-32 mx-auto bg-white overflow-auto transition-all duration-300 ease-in-out" style={open === false ? {top: "100%", width: "20%"} : { top: "0",  width: "100%" }}>
      {console.log("OPEN", open)}
      <header className="flex justify-end items-center px-4 py-4">
        <button className="text-right" onClick={() => dispatch(actionCreators.editorModal())}>
          <CloseIcon classes="text-gray-400 h-6 w-6 " />
        </button>
      </header>
      <main className="flex items-start justify-center flex-col lg:flex-row gap-8 md:gap-16 mt-20 md:mt-24 lg:mt-32 mb-8">
        <div className="flex-1">
          <div className="space-y-6">
            <h3 className="text-xl text-gray-500 font-semibold">
              {" "}
              Story Preview{" "}
            </h3>
            <div className="grid place-content-center text-center bg-gray-100 px-4 md:px-8 h-48 w-full">
              <p className="text-gray-500">
                {" "}
                Include a high-quality image in your story to make it more
                inviting to readers.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <p className="sr-only"></p>
              <input
                className="w-full text-xl md:text-2xl font-semibold py-1 border-b-2 border-gray-300 focus:outline-none"
                type="text"
                name="name"
              />
            </div>
            <div className="mt-4">
              <p className="sr-only"></p>
              <input
                className="w-full text-base md:text-lg py-1 border-b-2 border-gray-300 focus:outline-none"
                type="text"
                name="name"
              />
            </div>
            <p className="text-gray-500 mt-5">
              {" "}
              <span className="font-semibold">Note:</span> Changes here will
              affect how your story appears in public places like Medium’s
              homepage — not the story itself.{" "}
            </p>
          </div>
        </div>
        <div className="flex-1 w-full space-y-6 text-gray-500">
          <h3 className="text-xl ">
            Publishing to: <span className="font-semibold"> AzizulBappy </span>
          </h3>
          <p className="text-gray-700">
            {" "}
            Add or change tags (up to 5) so readers know what your story is
            about{" "}
          </p>

          <div className="tag__editor w-full border-2 bg-gray-100">
            <div
              ref={tags}
              className="flex items-center gap-4 px-4 py-4"
              contentEditable={tagCount < 5 ? true : false}
              onKeyDown={handleTags}
            ></div>
          </div>

          <button className="text-base popover__button text-white px-4 py-2 rounded-3xl">
            Publish Now
          </button>
        </div>
      </main>
    </section>
  );
}

export default Modal;
