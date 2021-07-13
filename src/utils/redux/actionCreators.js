import actionTypes from "./actionTypes"

// editor
export const editorModal = () => ({
    type: actionTypes.IS_MODAL
})

    // auto save blog
export const saveBlog = (editorData) => (dispatch) => {
    dispatch(saving)

    let parseData = {
        title: "",
        body: "",
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorData, "text/html");
    const title = doc.getElementsByTagName("h1")[0];
    parseData.title = title.innerText;
    doc.body.removeChild(title);
    parseData.body = doc.body.innerHTML;
}

const saving = () => ({
    type: actionTypes.SAVE_BLOG,
    payload: "Saving"
})

const saved = () => ({
    type: actionTypes.SAVE_BLOG,
    payload: "Saved"
})