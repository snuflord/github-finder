import { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import {useParams} from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Spinner from '../components/layout/Spinner'

function User() {

  const {getUser, user, loading} = useContext(GlobalContext)
  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  // Destructuring 'user' (contains all API data) to individual parts
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className="mb-4">
          <Link to='/' className='btn btn-ghost'>
            Back Home
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img className='hover:z-10' src={avatar_url}></img>
              </figure>
              <div className="card-body relative">
                <div className='absolute bottom-10 left-10'>
                  <h2 className="card-title mb-0">
                    {name}
                  </h2>
                  <p>{login}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User