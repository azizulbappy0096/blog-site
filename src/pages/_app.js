// --- styles
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/index.scss'
import "../styles/post.scss"
import "ckeditor5-custom-build/build/main.css"
import "../styles/editor.scss"

// modules
import { Provider } from "react-redux"
import store from '../utils/redux/reduxStore';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
