import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import githubService from '../../services/github-service'

const UserRepos = () => {
    const { username } = useParams()
    const [repos, setRepos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        githubService
            .getReposByUsername(username)
            .then(res => {
                console.log(res.data)
                setRepos(res.data)
            })
            .finally(() => { setLoading(false) })
    }, [username])
    return (
        <div>
            {loading && ("Loading...")}
            {repos.map(repo => (<div key={repo.id}>{repo.name}</div>))}
        </div>
    )
}

export default UserRepos