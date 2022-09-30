import {useContext, } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GlobalContext from '../../context/GlobalContext'

// When 'go' button is clicked in UserSearch comp, the handleSubmit function is called, calling searchusers from globalcontext, which gets the data. That data is returned to this component via GlobalContext to be mapped through. For each user found, the UserResults component is populated with a UserItem component, which takes in all user data. Of all this user data only the login and profile image are used to render small card components that represent each user. 

// User Results, using useEffect hook to run on page load, which calls fetchUsers function, which is returning data from API.
function UserResults() {

    const {users, loading} = useContext(GlobalContext)

if(!loading) {
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
      )
    } else {
       return (
       <Spinner/> )
    }
}

export default UserResults