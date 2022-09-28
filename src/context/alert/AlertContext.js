// import { createContext, useReducer} from 'react'
// import alertReducer from './AlertReducer'

// const AlertContext = createContext()

// export const AlertProvider = ({children}) => {
    
//     const initialState = null

//     const [state, dispatch] = useReducer(alertReducer, initialState)

//     // Set alert

//     // set alert takes in properties msg and type
//     const setAlert = (msg, type) => {
//         dispatch({
//             type: 'SET_ALERT',
//             // msg and type properties delivered to payload to send to reducer
//             payload: {msg, type}
//         })

//         setTimeout(() => dispatch({type: 'REMOVE_ALERT'}, 3000))
//     }

//     return (
//         //alert prop = state
//             <AlertContext.Provider value={{alert: state, setAlert}}>
//                 {children}
//             </AlertContext.Provider>
//         )
// }

// export default AlertContext