import actionTypes from "../actionTypes"

const initialState = {
    modal: false,
    saveStatus: false
}

const editorReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.IS_MODAL:
            return({
                ...state,
                modal: !state.modal
            })
        case actionTypes.SAVE_BLOG:
            return({
                ...state,
                saveStatus: action.payload
            })
        default:
            return state
    }
}

export default editorReducer