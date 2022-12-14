import {useContext} from 'react'
import GlobalContext from "../../context/GlobalContext"
import Spinner from "../layout/Spinner"
import PropTypes from 'prop-types'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'

function RepoItem({repo}) {

    const {getUserRepos, repos, loading, user} = useContext(GlobalContext)

    const {
      name,
      description,
      html_url,
      forks,
      open_issues,
      watchers_count,
      stargazers_count
    } = repo

  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className="card-body">
        <h3 className="mb-2 text-xl text-secondary font-semibold">
          <FaLink className='inline mr-2'/>
          <a href={html_url}>{name}</a>
        </h3>
        <p className="mb-3 text-white">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg rounded-2xl">
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg rounded-2xl">
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error py-3 rounded-2xl">
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className="mr-2 badge badge-info badge-lg rounded-2xl">
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem