import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { CssBaseline } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const UsernameSearch = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [userNameInput, setUserNameInput] = useState('')
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form
                    className={classes.form}
                    noValidate
                    autoComplete="off"
                    onSubmit={(e) => {
                        e.preventDefault()
                        navigate(`/user/${userNameInput}`)
                    }}
                >
                    <TextField
                        value={userNameInput}
                        required
                        fullWidth
                        autoFocus
                        label="Enter Github Username"
                        variant="outlined"
                        onChange={(e) => setUserNameInput(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!Boolean(userNameInput)}
                        type="submit"
                        fullWidth
                        className={classes.submit}
                    >
                        Search Public Repos
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default UsernameSearch
