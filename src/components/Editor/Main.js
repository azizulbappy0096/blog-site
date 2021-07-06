import React, { useEffect, useRef, useState } from "react";
import { BallonEditorConfiguration, ClassicEditorConfiguration } from "./EditorConfig"

function Main() {
  const editorTypeRef = useRef();
  const { CKEditor, Editor } = editorTypeRef.current || {};
  const [view, setView] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    if (window.innerWidth < 1080) {
      setView("small");
    } else {
      setView("large");
    }

    editorTypeRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor")
    };
    setLoaded(true);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1080 && view !== "small") {
        setView("small");
      } else if (view !== "large") {
        setView("large");
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const renderEditor = () => {
    return (
      <div>
        <section className={view === "large" ? "" : ""}>
          <CKEditor
            editor={Editor.ClassicEditor}
            config={ClassicEditorConfiguration}
            data={data}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
              console.log(editor.contentStyles)
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
        {/* <section className={view === "small" ? "hidden" : ""}>
          <CKEditor
            editor={Editor.BalloonBlockEditor}
            config={BallonEditorConfiguration}
            data={data}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
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
      </div>
    );
  };

  return (
    <section className="text-lg md:text-xl leading-relaxed md:w-2/3 mt-12 mx-auto">
      {isLoaded ? renderEditor() : <div> Loading </div>}

      <div className="mt-6 ck-content" dangerouslySetInnerHTML={{__html: data}}>

      </div>
    </section>
  );
}

export default Main;
