import { createContext, useReducer} from 'react'
import globalReducer from './GlobalReducer'

    const GlobalContext = createContext()

    const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
  
    export const ContextProvider = ({children}) => {

        // declare initial state for reducer
        const initialState = {
            users: [],
            user: {},
            loading: false,
        }

        // declaring state and dispatch method to equal reducer method and initialstate value.
        const [state, dispatch] = useReducer(globalReducer, initialState)

        // Get search results
        const searchUsers = async (text) => {
            setLoading()

            // new URLparams appends the searched text to each instance of response
            const params = new URLSearchParams({q: text})
            const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
             headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                 }
            })
            // exporting json response as 'data' const object.
            const {items} = await response.json()
            
            // dispatch is called in this fetchUsers function, which was called in UserResults: running on page load.
            dispatch({
                // GlobalReducer case will check for this type.
                type: 'GET_USERS',
                payload: items,
            })
        }

        // Clear users from state - exporting state.users below will allow this empty array to be called onclick.
        const clearUser = () => {
            dispatch({
                type: 'CLEAR_USERS',
            })
        } 

        // Set loading - handles boolean in Reducer for spinner element.

        const setLoading = () => dispatch({type: 'SET_LOADING'})

        // Get a single user - taking in login argument (the unique 'user' of github response)

        const getUser = async (login) => {
            setLoading()

            // response gets github data for specific 'login'
            const response = await fetch(`${GITHUB_URL}/users/${login}`, {
             headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                 }
            })

            if(response.status === 404) {
                // redirect to Not found page
                window.location = '/notfound'
            } else {
                const data = await response.json()
                dispatch({
                    // GlobalReducer case will check for this type.
                    type: 'GET_USER',
                    payload: data,
                })
            }
        }


        return (
        // users prop takes in updated state.users array/ loading prop = updated state/updated boolean.
        <GlobalContext.Provider value={{searchUsers, clearUser, getUser, users: state.users, loading: state.loading, user: state.user}}>
            {children}
        </GlobalContext.Provider>
        )
    }
  
export default GlobalContext