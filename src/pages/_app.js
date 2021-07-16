// --- styles
import 'tailwindcss/tailwind.css'
import "ckeditor5-custom-build/build/main.css"
import '../styles/globals.scss'
import '../styles/index.scss'
import "../styles/post.scss"
import "../styles/editor.scss"

// modules
import { useEffect } from 'react'
import { Provider } from "react-redux"
import store from '../utils/redux/reduxStore';
import * as actionCreators from "../utils/redux/actionCreators"
import axios from "../utils/axios"

// layout
import Header from "../Layout/Header"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axios
    .get("/users/me", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        store.dispatch(actionCreators.setUser(res.data))
      }
    }).catch(err => {
      console.log(err)
    })
    
  }, [])

  return (
    <Provider store={store}>
      <Header>
      <Component {...pageProps} />
      </Header>
    </Provider>
  )
}

export default MyApp
