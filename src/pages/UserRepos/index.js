import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import githubService from '../../services/github-service'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

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

            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Text only
            </Typography>
            <List dense={true}>
                {repos.map(repo => (
                    <ListItem key={repo.id}>
                        <ListItemText
                            primary={repo.name}
                            secondary={repo.name ? 'Secondary text' : null}
                        />
                    </ListItem>))}

            </List>
        </div >
    )
}

export default UserRepos