const initialState = {
    mounika: [],
    currenc: []
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SUBJECTS":
            return {
                ...state,
                mounika: action.payload
            }
        case "GET_CURRENCIES":
            return {
                ...state,
                currenc: action.payload
            }
        default:
            return state
    }
}
export default postReducer;