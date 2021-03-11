import React, {useState} from 'react';
import {TextField, Button, Grid, Link} from '@material-ui/core';
import Axios from 'axios';
import Error from './Error';
import './css/common.css';
import Cookies from 'universal-cookie';
import {User} from './contracts/User';
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    let history = useHistory();

    const doLogin = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/users/login', {
            email: email,
            password: password
        }).then(res => {
            if (res.data.token && res.data.user.displayName) {
                const cookies = new Cookies();
                cookies.set('user', new User(res.data.token, res.data.user.displayName), {path: '/', expires: new Date(Date.now()+ 60000)});
                history.push('/');
            }
        }).catch(error => {
            const message = error && error.response && error.response.data && error.response.data.msg || '';
            setErrorMessage(message);
        });
    }

    return (
        <>
            <div className="center">
                <form onSubmit={doLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)
                        }
                />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <Error errorMessage={errorMessage}/>
            </div>
        </>
    );
}
