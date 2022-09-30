import {useState, useContext} from 'react'
import GlobalContext from '../../context/GlobalContext'
import Alert from '../layout/Alert'

function UserSearch() {

    // returning data and searchUsers function

    const {users, searchUsers, clearUser} = useContext(GlobalContext)

    // for Alert toggle
    const [isFailed, setIsFailed] = useState(false)

    // set empty state - text coming from input-value - initial state ""

    const [text, setText] = useState("")

    // change state to value of whatever's typed into input onChange

    const handleChange = (e) => {
        setText(e.target.value)
    }

    // triggered by clicking 'go' button
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(text === "") {
            
    // setisfailed true shows alert message, called in isFailed variable && <alert>

        setIsFailed(true)
        setTimeout(() => {
            setIsFailed(false)
        }, 5000)
            
        } else {
            // text from useState-text-from input-value
            searchUsers(text)
            setText("")
        }
    }

    const clearSubmit = (e) => {
        e.preventDefault()
        clearUser()
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            {isFailed == true &&
        <div className="fixed top-0 right-0 p-32"><Alert /></div>
            }
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input type="text" placeholder='search' value={text} onChange={handleChange} className="w-full pr-40 bg-gray-400 input input-lg text-black rounded-lg" />
                    <button type="submit" className="absolute top-0 right-0 rounded-lg w-36 btn btn-lg">Go</button>
                </div>
            </div>
            </form>
        </div>
        {/* if users array is more than 0, allow clearSubmit to fire */}
        {users.length > 0 && (<div>
            <button onClick={clearSubmit} className="btn btn-ghost btn-lg rounded-lg">Clear</button>
        </div>)}
    </div>
  )
}

export default UserSearch