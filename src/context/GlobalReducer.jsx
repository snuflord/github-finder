
const globalReducer = (state, action) => {
    switch(action.type) {
        // in the case where 'GET_USERS' action is called by type:
        case 'GET_USERS':
            // The following is the data that is returned to the state property in globalContext
            return {
                // state spread operator here gets empty state===initialState from globalContext
                ...state,
                // empty 'users' array (from initialState) is populated with 'data' from API, delivered by dispatch:payload:items. items===data
                users: action.payload,
                // The initialState loading bool is updated from true to false
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            }
        default: 
        return (
            state )
    }
}
export default globalReducer