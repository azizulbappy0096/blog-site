// --- styles
import 'tailwindcss/tailwind.css'
import "ckeditor5-custom-build/build/main.css"
import '../styles/globals.scss'
import '../styles/index.scss'
import "../styles/post.scss"
import "../styles/editor.scss"

// modules
import { useEffect, useState } from 'react'
import { Provider } from "react-redux"
import store from '../utils/redux/reduxStore';
import * as actionCreators from "../utils/redux/actionCreators"
import axios from "../utils/axios"
import Router from "next/router"
// layout
import Header from "../Layout/Header"

import App from 'next/app'
import Loader from '../components/Loader'



function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    axios
    .get("/users/me", {
      withCredentials: true
    })
    .then((res) => {
      if (res.statusText === "OK") {
        // store.dispatch(actionCreators.setUser(res.data))
        console.log(res.data)
        store.dispatch(actionCreators.setUser(res.data))
        setLoader(false)
        // return res.data
        // console.log(res);
      }
    }).catch(err => {
      setLoader(false)
      console.log(err)
    })
    // store.dispatch(actionCreators.setUser(user))
  }, [])

  return (
    <Provider store={store}>
      {loader ? <Loader text="Loading" /> :
      <Header>
        <Component {...pageProps} />
      </Header>}
    </Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//


// MyApp.getInitialProps = async (appContext) => {
//   try {

//       // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   // console.log("app>>>>>>>",appContext.ctx.store)
//   // console.log("app>>>>>>>",appContext.ctx.req.headers.cookie)
//     let user = await axios
//     .get("/users/me", {
//       headers: {
//         cookie: appContext.ctx.req.headers.cookie
//       }
//     })
//     .then((res) => {
//       if (res.statusText === "OK") {
//         // store.dispatch(actionCreators.setUser(res.data))
//         console.log(res.data)
//         return res.data
//         // console.log(res);
//       }
//     })
  
//     return { ...appProps, user }
//   }catch(err) {
//     console.log(err)
//     return { }
//   }
// }


export default MyApp
