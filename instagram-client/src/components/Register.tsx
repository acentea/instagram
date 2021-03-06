import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import Error from './Error';
import './css/common.css';

export default function Register() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const [displayName, setDisplayName] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    let history = useHistory();

    const register = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/users/register', {
            email: email,
            password: password,
            passwordCheck: passwordCheck,
            displayName: displayName
        }).then(res => {
            history.push('/login');
        }).catch(error => {
            const message = error && error.response && error.response.data && error.response.data.msg || '';
            setErrorMessage(message);
        });
    }

    return (
        <>
            <div className="center">
                <form onSubmit={register}>
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
                        onChange={(e) => setPassword(e.target.value)}
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
                <Error errorMessage={errorMessage}/>
            </div>
        </>
    );
}
