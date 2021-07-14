// modules
import { combineReducers } from "redux"

// --- reducers
import editorReducer from "./editor"
import storiesReducer from "./stories"

const rootReducer = combineReducers({
    editor: editorReducer,
    stories: storiesReducer
})

export default rootReducer;