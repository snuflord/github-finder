import {useContext} from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import GlobalContext from '../../context/GlobalContext'
import RepoItem from './RepoItem'

function RepoResults({repos}) {

  const {loading} = useContext(GlobalContext)

  if(!loading) {
  return (
      <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
          <h2 className="text-3xl my-4 font-bold card-title">
            Latest Repos
          </h2>
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <Spinner/>
    )
    
  }
}

RepoResults.propTypes =  {
  repos: PropTypes.array.isRequired
}
  

export default RepoResults