// modules
import { combineReducers } from "redux"

// --- reducers
import editorReducer from "./editor"
import storiesReducer from "./stories"
import authReducer from "./auth"

const rootReducer = combineReducers({
    editor: editorReducer,
    stories: storiesReducer,
    auth: authReducer
})

export default rootReducer;