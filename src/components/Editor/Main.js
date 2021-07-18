import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";

// editor configuration
import {
  BallonEditorConfiguration,
  ClassicEditorConfiguration,
} from "./EditorConfig";

// components
import Loader from "../Loader";
import Modal from "./Modal";

function Main() {
  const editorTypeRef = useRef();
  const router = useRouter();
  const isModal = useSelector((state) => state.editor.modal);
  const { CKEditor, Editor } = editorTypeRef.current || {};
  // const [view, setView] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState("");
  const [titleBody, setTitleBody] = useState({});

  useEffect(() => {
    // measure viewport
    // if (window.innerWidth < 1080) {
    //   setView("small");
    // } else {
    //   setView("large");
    // }

    // import required editor modules
    editorTypeRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };

    //

    // listen on window resizing to show right editor
    // window.addEventListener("resize", () => {
    //   if (window.innerWidth < 1080 && view !== "small") {
    //     setView("small");
    //   } else if (view !== "large") {
    //     setView("large");
    //   }
    // });

    // // cleading up
    // return () => {
    //   window.removeEventListener("resize", () => {});
    // };
  }, []);

  useEffect(() => {
    console.log("use", router);
    if (router.isReady) {
      console.log("use 1", router);
      setLoaded(true);
      if (router.query.id) {
        axios
          .get(`/api/blogs/${router.query.id}`)
          .then((res) => {
            console.log(res);
            if (res.statusText === "OK") {
              let blog = res.data.payload.blog;

              let header = `<h1> ${blog.title} </h1>`;
              let html = header + blog.body;
              setData(html);
            }
          })
          .catch((err) => {
            router.replace("/edit?type=new-post", undefined, { swallow: true });
          });
      } else if (router.query.type === "new-post") {
        return;
      } else {
        router.replace("/edit?type=new-post", undefined, { swallow: true });
      }
    }
  }, [router]); // changed

  useEffect(() => {
    document.querySelectorAll("oembed[url]").forEach((element) => {
      iframely.load(element, element.attributes.url.value);
    });
  }, [data]);

  let getTitleAndBody = function (editorData) {
    let parseData = {
      title: "",
      body: "",
      preview: "",
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorData, "text/html");
    const title = doc.getElementsByTagName("h1")[0];
    const preview = doc.getElementsByTagName("p")[0];

    parseData.title = title.innerText || "";
    doc.body.removeChild(title);
    parseData.body = doc.body.innerHTML || "";
    parseData.preview = preview.innerText || "";
    setTitleBody(parseData);
  };

  const renderEditor = () => {
    return (
      <>
        <section className={isModal ? "hidden" : ""}>
          <CKEditor
            editor={Editor.ClassicEditor}
            config={ClassicEditorConfiguration}
            data={data}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
              // console.log(editor.contentStyles);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setData(data);
              // getTitleAndBody(data)
              // console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              // console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              // console.log("Focus.", editor);
            }}
          />
        </section>
        {/* <section className={view === "small" ? "hidden" : ""}>
          <CKEditor
            editor={Editor.BalloonBlockEditor}
            config={BallonEditorConfiguration}
            data={data}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
              console.log(editor.contentStyles);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setData(data);
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </section> */}
        <Modal />
      </>
    );
  };

  return isLoaded ? renderEditor() : <Loader text="Editor is loading..." />;
}

export default Main;
