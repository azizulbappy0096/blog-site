// --- styles
import 'tailwindcss/tailwind.css'
import "ckeditor5-custom-build/build/main.css"
import '../styles/globals.scss'
import '../styles/index.scss'
import "../styles/post.scss"
import "../styles/editor.scss"

// modules
import { Provider } from "react-redux"
import store from '../utils/redux/reduxStore';

// layout
import Header from "../Layout/Header"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header>
      <Component {...pageProps} />
      </Header>
    </Provider>
  )
}

export default MyApp
