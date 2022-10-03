// we have imported axios so that we can group two get requests in the Promise.all function. 
import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `token ${GITHUB_TOKEN}`}
})


// GET SEARCH RESULTS (ALL users)
export const searchUsers = async (text) => {
   
    // new URLparams appends the searched text to each instance of response
    const params = new URLSearchParams({q: text})
    
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

// GET USER AND REPOS

export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])
    // We can group two get requets togrther like so - These objects are returned to the GlobalReducer in 'GET_USER_AND_REPOS' to update the state. The state is updated when the action is called for this getUserAndRepos function in the User useEffect hook. 
    return {user: user.data, repos: repos.data}
}
