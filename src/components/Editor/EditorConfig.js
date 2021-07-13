import { AddClassToAllParagraph } from "./CustomPlugins";

var IFRAME_SRC = 'https://cdn.iframe.ly/api/iframe';
var API_KEY = '2abfe30316a925c0d0ef48'; 

const config = {
  placeholder: "Start writing your blog...",
  language: "en",
  extraPlugins: [AddClassToAllParagraph],
  title: {
    placeholder: "Give a title",
  },
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph",
      },
      {
        model: "heading2",
        view: {
          name: "h3",
          classes: ["mt-4 mb-0", "font-semibold", "text-xl", "md:text-3xl"],
        },
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
    ],
  },
  link: {
    decorators: {
      addUnderlineLink: {
        mode: "automatic",
        callback: (url) => true,
        attributes: {
          class: "underline",
        },
      },
    },
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  mediaEmbed: {
    // Previews are always enabled if there’s a provider for a URL (below regex catches all URLs)
    // By default `previewsInData` are disabled, but let’s set it to `false` explicitely to be sure
    previewsInData: false,

    providers: [
      {
        // hint: this is just for previews. Get actual HTML codes by making API calls from your CMS
        name: "iframely previews",

        // Match all URLs or just the ones you need:
        url: /.+/,

        html: (match) => {
          const url = match[0];

          var iframeUrl =
            IFRAME_SRC +
            "?app=1&api_key=" +
            API_KEY +
            "&url=" +
            encodeURIComponent(url);
          // alternatively, use &key= instead of &api_key with the MD5 hash of your api_key
          // more about it: https://iframely.com/docs/allow-origins

          return (
            // If you need, set maxwidth and other styles for 'iframely-embed' class - it's yours to customize
            '<div class="iframely-embed">' +
            '<div class="iframely-responsive">' +
            `<iframe src="${iframeUrl}" ` +
            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
            "</iframe>" +
            "</div>" +
            "</div>"
          );
        },
      },
    ],
  },
  autosave: {
    // waitingTime: 5000,
    save( editor ) {
      
      return saveData(editor.getData())
    
    }
  },
  ckfinder: {
    // Upload the images to the server using the CKFinder QuickUpload command.
    uploadUrl: "http://localhost:2001/upload",

    // Define the CKFinder configuration (if necessary).
    // options: {
    //     resourceType: 'Images'
    // }
  },
};

export const BallonEditorConfiguration = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "blockQuote",
      "insertTable",
      "code",
      "undo",
      "redo",
    ],
  },
  blockToolbar: ["imageUpload", "mediaEmbed", "codeBlock", "horizontalLine"],
  ...config,
};

export const ClassicEditorConfiguration = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "code",
      "codeBlock",
      "horizontalLine",
      "undo",
      "redo",
    ],
  },
  ...config,
};


const saveData = (editorData) => {
  return new Promise(resolve => {
    let timeStamp = Math.round(new Date().getTime() / 1000);
    let localStorageData = {
      expireAt: timeStamp + (1 * 3600),
      html: editorData
    }

    window.localStorage.setItem("__draft", JSON.stringify(localStorageData))
    resolve()
  })
}