import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import githubService from '../../services/github-service'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'

//create a function to filter the repos by keywrord
const filterRepos = (repos, keyword) => {
    if (!keyword) return repos
    return repos.filter(repo => repo.name.toLowerCase().includes(keyword.toLowerCase()))
}


const UserRepos = () => {
    const { username } = useParams()
    const [repos, setRepos] = React.useState([])
    const [keyword, setKeyword] = React.useState('')
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
            <Container maxWidth="sm">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    padding={4}
                >

                    {loading && (<CircularProgress />)}

                    {(!loading && repos.length > 0) && (
                        <TextField
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            id="filled-basic"
                            label="Search Repositories"
                            variant="filled"
                            fullWidth />
                    )}
                    {(!loading && repos.length === 0) && (<h4>No Repositories Found!</h4>)}
                    <List dense={true}>
                        {/* {repos.map(repo => (
                        <>
                            <ListItem key={repo.id}>
                                <ListItemText
                                    primary={repo.name}
                                    secondary={repo.description ? repo.description : null}
                                />
                            </ListItem>
                            <Divider />
                        </>
                    ))} */}
                        {filterRepos(repos, keyword).map(repo => (
                            <>
                                <ListItem key={repo.id} fullWidth>
                                    <ListItemText
                                        primary={repo.name}
                                        secondary={repo.description ? repo.description : null}
                                    />
                                </ListItem>
                                <Divider />
                            </>
                        ))}
                        {/* {this.state.players.filter(player =>
                        player.name.includes(this.state.player)).map(searchedPlayers => {
                            return (
                                <tr key={searchedPlayers.name}>
                                    <td>{searchedPlayers.name}</td>
                                </tr>
                            )
                        })} */}

                    </List>
                </Grid>
            </Container >
        </div >
    )
}

export default UserRepos