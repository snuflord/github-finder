import {useContext, } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GlobalContext from '../../context/GlobalContext'

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