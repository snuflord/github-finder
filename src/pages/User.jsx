import { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import {useParams} from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import RepoResults from '../components/repos/RepoResults'
import {getUserAndRepos} from '../context/github/GithubActions'

function User() {

  const { dispatch, user, loading, repos } = useContext(GlobalContext)
  const params = useParams()

  // HERE, instead of updating the data through Global Context, the functions that handle data are called directly from the function in GithubActions: getUserAndRepos. This function contains the returned data from the get requests requests for both the user profile and user repos. Remember, 'dispatch' is contiguous with the initial state, therefore the state can be updated here by dispatching the action to the GlobalReducer, which handles updating the state data.

  useEffect(() => {

    dispatch({type: 'SET_LOADING'})
    // declaring new functin here to contain the async function getUserAndRepos.
    const getUserData = async () => {

      // The data returned from getUserAndRepos (wich contains the get requets for both the profile and repos) is then dispatched to the globalReducer here. The state updates, and then the updated data is called again...
      const userData = await getUserAndRepos(params.login)
      // this new variable userData contains the returned data for both repos and user.
      dispatch({type: 'GET_USER_AND_REPOS', payload: userData})

    }
    // called again here. With all the updated data returned, the constituent parts of the state (user, repos etc) can be called. 
    getUserData()
  }, [dispatch, params.login])

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
                <img src={avatar_url}></img>
              </figure>
              <div className="card-body relative">
                <div className='absolute bottom-8 left-8'>
                  <h2 className="card-title mb-0">
                    {name}
                  </h2>
                  <p>{login}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title pb-5">
                {name}
                <div className="ml-2 mr-1 badge badge-success">
                  {type}
                </div>
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline'>
                  Visit Profile
                </a>
              </div>
            </div>
            {/* the 'stat' table is a daisy UI class, each stat will line up on x axis.  */}
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {/* Here we check if 'location' has a value, create these divs */}
              {location && (
                <div className='stat'>
                    <div className="stat-title text-md">Location</div>
                    <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {twitter_username && (
                <div className='stat'>
                    <div className="stat-title text-md">Twitter</div>
                    <div className="text-lg stat-value">
                      <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer' className='hover:text-green-400 duration-300'>{twitter_username}</a>
                    </div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                    <div className="stat-title text-md">Blog</div>
                    <div className="text-lg stat-value">
                      <a href={blog} target='_blank' rel='noreferrer' className='hover:text-green-400 duration-300'>{blog}</a>
                    </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats stats-vertical lg:stats-horizontal">
          
          
            <div className="stat">
              <div className="stat-figure text-secondary">
                  <FaUsers className='text-3xl md:text-5xl'/>
              </div>
              <div className="stat-title pr-5">
                Followers
              </div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                  <FaUserFriends className='text-3xl md:text-5xl'/>
              </div>
              <div className="stat-title pr-5">
                Following
              </div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>
          

              
            <div className="stat">
              <div className="stat-figure text-secondary">
                  <FaCodepen className='text-3xl md:text-5xl'/>
              </div>
              <div className="stat-title pr-5">
                Public Repos
              </div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                  <FaStore className='text-3xl md:text-5xl'/>
              </div>
              <div className="stat-title pr-5">
                Public Gists
              </div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>

                {/* Repos from globalcontext passed in as prop here */}
          <RepoResults repos={repos}/>
           
        </div>
      
    </>
  )
}

export default User