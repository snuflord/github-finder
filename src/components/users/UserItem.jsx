import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// The Link in this component corresponds to the <Route path='/user/:login' element={<User/>}/> in App.js. The link in each UserItem component is unique to each userItem rendered, as the URL path is set to the :login (the username) of each user found from the  users.map process.

// user is ( {OBJECT} ) returned from users.map (users is 'items' from GlobalContext)
function UserItem({ user: {login, avatar_url} }) {
  return (
    <div className='card shadow-md compact side bg-base-100 hover:md:bg-base-200 group duration-300'>
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="profile image" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link className='text-base-content text-opacity-40 group-hover:text-white group-hover:duration-300' to={`/user/${login}`}>Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem