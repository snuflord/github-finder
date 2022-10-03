import { createContext, useReducer} from 'react'
import globalReducer from './GlobalReducer'

    const GlobalContext = createContext()
  
    export const ContextProvider = ({children}) => {

        // declare initial state for reducer
        const initialState = {
            users: [],
            user: {},
            repos: [],
            loading: false,
        }

        // declaring state and dispatch method to equal reducer method and initialstate.
        const [state, dispatch] = useReducer(globalReducer, initialState)

        return (
        // users prop takes in updated state.users array/ loading prop = updated state/updated boolean.
        <GlobalContext.Provider value={{ dispatch, ...state }}>
            {children}
        </GlobalContext.Provider>
        )
    }
  
export default GlobalContext