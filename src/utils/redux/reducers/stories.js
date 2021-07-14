import actionTypes from "../actionTypes"

const initialState = {
    drafts: 0,
    published: 0
}

const storiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_DRAFT:
            return({
                ...state,
                drafts: action.payload
            })
        case actionTypes.SET_PUBLISHED:
            return({
                ...state,
                published: action.payload
            })
        default:
            return state
    }
}

export default storiesReducer