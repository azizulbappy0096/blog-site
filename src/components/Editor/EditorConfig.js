import { AddClassToAllParagraph } from "./CustomPlugins";

const config = {
  placeholder: "Start writing your blog",
  language: "en",
  extraPlugins: [AddClassToAllParagraph],
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
    previewsInData: true,
    providers: [
      {
        name: "twitter",
        url: /^twitter\.com/,
        html: match => {
          const splitted = match.input.split("/");
          const id = splitted[splitted.length - 1]
          console.log("tweetId", tweetId)
          return (
            "<div></div>"
          );
        }
      },
    ],
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
      "htmlEmbed",
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
      "htmlEmbed",
      "imageUpload",
      "undo",
      "redo",
    ],
  },
  ...config,
};
