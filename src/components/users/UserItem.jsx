import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


// user is ( {OBJECT} ) returned from users.map (users is 'items' from GlobalContext)
function UserItem({ user: {login, avatar_url} }) {
  return (
    <div className='card shadow-md compact side bg-base-100 hover:md:bg-base-200'>
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
                <Link className='text-base-content text-opacity-40 hover:text-white' to={`/user/${login}`}>Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem