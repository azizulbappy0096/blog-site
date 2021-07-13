// modules
import { combineReducers } from "redux"

// --- reducers
import editorReducer from "./editor"

const rootReducer = combineReducers({
    editor: editorReducer
})

export default rootReducer;