import React, { useEffect, useRef, useState } from "react";

// editor configuration
import {
  BallonEditorConfiguration,
  ClassicEditorConfiguration,
} from "./EditorConfig";

// components
import Loader from "../Loader";

function Main() {
  const editorTypeRef = useRef();
  const { CKEditor, Editor } = editorTypeRef.current || {};
  const [view, setView] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState("");
  const [titleBody, setTitleBody] = useState({});

  useEffect(() => {
    // manage draft in localStorage
    let __draft = window.localStorage.getItem("__draft");
    if (__draft) {
      __draft = JSON.parse(__draft);
      let timeStamp = Math.round(new Date().getTime() / 1000);
      if (timeStamp < __draft.expireAt) {
        setData(__draft.html);
      } else {
        window.localStorage.removeItem("__draft");
      }
    }

    // measure viewport
    if (window.innerWidth < 1080) {
      setView("small");
    } else {
      setView("large");
    }

    // import required editor modules
    editorTypeRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };

    //
    setLoaded(true);

    // listen on window resizing to show right editor
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1080 && view !== "small") {
        setView("small");
      } else if (view !== "large") {
        setView("large");
      }
    });

    // cleading up
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll("oembed[url]").forEach((element) => {
      iframely.load(element, element.attributes.url.value);
    });
  }, [data]);

  let getTitleAndBody = function (editorData) {
    let tempData = {
      title: "",
      body: "",
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorData, "text/html");
    const title = doc.getElementsByTagName("h1")[0];
    tempData.title = title.innerText;
    doc.body.removeChild(title);
    tempData.body = doc.body.innerHTML;
    setTitleBody(tempData);
  };

  const renderEditor = () => {
    return (
      <div>
        <section className={view === "large" ? "hidden" : ""}>
          <CKEditor
            editor={Editor.ClassicEditor}
            config={ClassicEditorConfiguration}
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
        </section>
        <section className={view === "small" ? "hidden" : ""}>
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
        </section>
      </div>
    );
  };

  return isLoaded ? renderEditor() : <Loader text="Editor is loading..." />;
}

export default Main;
