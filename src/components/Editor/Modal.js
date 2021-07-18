import React, { useEffect, useRef, useState } from "react";
import axios from "../../utils/axios";
import { useRouter } from "next/router";

// redux
import * as actionCreators from "../../utils/redux/actionCreators";
import { useSelector, useDispatch } from "react-redux";

// icons
import { CloseIcon } from "../SvgIcons";

function Modal({}) {
  const tagsContainer = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.editor.modal);
  const user = useSelector(state => state.auth.user)
  
  let [tagCount, setTagCount] = useState(0);
  let [title, setTitle] = useState("");
  let [preview, setPreview] = useState("");
  let [previewImage, setPreviewImage] = useState("");
  let [tags, setTags] = useState([])
  let [images, setImages] = useState([]);

  useEffect(() => {
    document.execCommand("defaultParagraphSeparator", true, "p");
  }, []);

  useEffect(() => {
    axios
      .get(`/api/blogs/${router.query.id}`)
      .then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          let blog = res.data.payload.blog;

          setTitle(blog.title);
          setPreview(blog.preview);
          setImages(blog.images);
        }
      })
      .catch((err) => {});
  }, [open]);

  const handlePreviewImg = (e) => {
    console.log(e);
    setPreviewImage(e.target.src);
  };

  const handleTags = (e) => {
    let key = e.key;
    let selected = window.getSelection();
    console.log(selected);
    if (key === "Enter") {
      e.preventDefault();
      if (tagCount < 5 && selected.baseNode.textContent.length > 0) {
        
        let innerContent = selected.anchorNode.textContent;
        setTags(prev => [...prev, innerContent])
        console.log(innerContent)
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
          let innerContent = e.target.previousSibling.textContent
          let tempArray = [...tags]
          let index = tempArray.indexOf(innerContent)
          tempArray.slice(index, 1)

          setTags(tempArray)
          setTagCount((prev) => prev - 1);
          console.log(e);
          e.path[0].parentElement.remove();

          if (tagsContainer.current.lastChild.nodeName !== "P") {
            tagsContainer.current.append(nextTag);

            var range = document.createRange();

            range.setStart(tagsContainer.current.childNodes[tagCount], 0);
            range.collapse(true);

            selected.removeAllRanges();
            selected.addRange(range);
          }
        };

        div.append(p);
        div.append(button);
        tagsContainer.current.append(div);
        selected.anchorNode.parentNode.nodeName === "P"
          ? tagsContainer.current.removeChild(selected.anchorNode.parentNode)
          : tagsContainer.current.removeChild(selected.anchorNode);

        if (tagCount < 4) {
          tagsContainer.current.append(nextTag);
          var range = document.createRange();

          range.setStart(tagsContainer.current.childNodes[tagCount + 1], 0);
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

  const handlePublish = (e) => {
    let blogId = router.query.id
    
    if(title && preview && previewImage) {
      axios.put(`/api/blogs/${blogId}`, {
        title, preview, previewImage, tags,
         draft: false
      }, {
        withCredentials: true
      }).then(res => {
        console.log(res)
        if(res.statusText === "OK") {
          alert("Published")
        }
      }).catch(err => {
        alert("Seomthing went wrong")
      })
    }else {
      alert("Fill up all")
    }
  }

  return (
    <section
      className="fixed left-0 right-0 z-50 h-full px-8 md:px-32 mx-auto bg-white overflow-auto transition-all duration-300 ease-in-out"
      style={
        open === false
          ? { top: "100%", width: "20%" }
          : { top: "0", width: "100%" }
      }
    >
      {console.log("OPEN", open)}
      <header className="flex justify-end items-center px-4 py-4">
        <button
          className="text-right"
          onClick={() => dispatch(actionCreators.editorModal())}
        >
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
            <div className="relative bg-gray-100 h-48 overflow-y-auto w-full">
              {previewImage ? (
                <>
                <img
                  src={previewImage}
                  alt="Preview image"
                  className="h-full w-full object-cover"
                />
                <button className="text-white px-3 py-2 border-2 rounded-3xl absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4" style={{background: "rgba(0,0,0,.68)"}} onClick={() => setPreviewImage("")}> Change Preview Image </button>
                </>
              ) : images.length > 0 ? (
                <div className="flex p-4 md:p-8 items-start gap-4 flex-wrap">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      className="max-h-28 max-w-28 border-2 cursor-pointer border-transparent hover:border-blue-500"
                      src={img}
                      alt="Preview image"
                      onClick={handlePreviewImg}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid place-content-center text-center h-full w-full">
                  <p className="text-gray-500">
                    {" "}
                    Include a high-quality image in your story to make it more
                    inviting to readers.{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="mt-4">
              <p className="sr-only"></p>
              <input
                className="w-full text-xl md:text-2xl font-semibold py-1 border-b-2 border-gray-300 focus:outline-none"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <p className="sr-only"></p>
              <input
                className="w-full text-base md:text-lg py-1 border-b-2 border-gray-300 focus:outline-none"
                type="text"
                name="preview"
                value={preview}
                onChange={(e) => setPreview(e.target.value)}
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
            Publishing to: <span className="font-semibold"> {user.username} </span>
          </h3>
          <p className="text-gray-700">
            {" "}
            Add or change tags (up to 5) so readers know what your story is
            about{" "}
          </p>

          <div className="tag__editor w-full border-2 bg-gray-100">
            <div
              ref={tagsContainer}
              className="flex items-center gap-4 px-4 py-4"
              contentEditable={tagCount < 5 ? true : false}
              onKeyDown={handleTags}
            ></div>
          </div>

          <button className="text-base popover__button text-white px-4 py-2 rounded-3xl" onClick={handlePublish}>
            Publish Now
          </button>
        </div>
      </main>
    </section>
  );
}

export default Modal;
