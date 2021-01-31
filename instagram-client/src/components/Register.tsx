import React, {useState} from 'react';
import {TextField, Button, Grid, Link} from '@material-ui/core';
import Axios from 'axios';
import './Login.css';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [displayName, setDisplayName] = useState("");

    const doLogin = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/users/register', {
            email: email,
            password: password
        }).then(res => {
            console.log(res);
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordCheck"
                        label="Rewrite password"
                        type="password"
                        id="passwordCheck"
                        onChange={(e) => setPasswordCheck(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="displayName"
                        label="Display name"
                        name="displayName"
                        onChange={(e) => setDisplayName(e.target.value)
                        }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                </form>
            </div>
        </>
    );
}
