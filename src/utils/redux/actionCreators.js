import actionTypes from "./actionTypes"
import axios from "../axios"
import Router from "next/router"

// editor
export const editorModal = () => ({
    type: actionTypes.IS_MODAL
})

    // auto save blog
export const saveBlog = (editorData) => (dispatch) => {
    console.log("from save blog", Router)
    
    dispatch(saving())

    let parseData = {
        title: "",
        body: "",
        preview: ""
    };
    console.log(editorData)
    const parser = new DOMParser();
    const doc = parser.parseFromString(editorData, "text/html");
    const title = doc.getElementsByTagName("h1")[0];
    const preview = doc.getElementsByTagName("p")[0];
    console.log(preview)

    parseData.title = title?.innerText;
    doc.body.removeChild(title);
    parseData.body = doc.body.innerHTML;
    parseData.preview = preview.innerText

    if(Router.router.query.id) {console.log("PUT blog")
    return axios.put(`/api/blogs/${Router.router.query.id}`, {
            title: parseData.title,
            body: parseData.body,
            preview: parseData.preview
        }).then(res => {
            if(res.statusText === "OK") {
                dispatch(saved())
            }
        }).catch(err => {
            console.log("from saving", err)
        })
    }else if(!Router.router.query.id) {
        console.log("POST blog")
        return axios.post("/api/blogs", {
            title: parseData.title,
            body: parseData.body,
            preview: parseData.preview
        }).then(res => {
            if(res.statusText === "OK") {
                    let id = res.data.payload.blog._id
                    Router.replace(`edit/?type=p&id=${id}`, undefined, { swallow: true })
                dispatch(saved())
            }
        }).catch(err => {
            console.log("from saving", err)
        })
    }


}

export const saving = () => ({
    type: actionTypes.SAVE_BLOG,
    payload: "Saving..."
})

export const saved = () => ({
    type: actionTypes.SAVE_BLOG,
    payload: "Saved"
})


// stories
export const setDrafts = (count) => ({
    type: actionTypes.SET_DRAFT,
    payload: count
})

export const setPublished = (count) => ({
    type: actionTypes.SET_PUBLISHED,
    payload: count
})

// auth
export const signInModal = (value) => ({
    type: actionTypes.IS_SIGNIN,
    payload: value
})

export const signUpModal = (value) => ({
    type: actionTypes.IS_SIGNUP,
    payload: value
})

export const setUser = (value) => ({
    type: actionTypes.SET_USER,
    payload: value
})

export const registerUser = ({ name, username, email, password }) => (dispatch) => {
    axios.post("/users/register", {
        name,
        username,
        password,
        email
      }, {
          withCredentials: true
      }).then(res => {
        if(res.statusText === "OK") {
          dispatch(setUser(res.data.payload.user))
          Router.router.replace("/")
        }
      }).catch(err => {
        console.log(err)
      })
}

export const loginUser = ({ email, password }) => (dispatch) => {
    axios.post("/users/login", {
        password,
        email
      }, {
          withCredentials: true
      }).then(res => {
        if(res.statusText === "OK") {
          dispatch(setUser(res.data.payload.user))
          Router.router.replace("/")
        }
      }).catch(err => {
        console.log(err)
      })
}

export const logoutUser = () => (dispatch) => {
    axios.get("/users/logout",{
          withCredentials: true
      }).then(res => {
        if(res.statusText === "OK") {
          dispatch(setUser(null))
          Router.router.replace("/")
        }
      }).catch(err => {
        console.log(err)
      })
}
