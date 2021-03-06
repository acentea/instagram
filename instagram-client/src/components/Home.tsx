import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {User} from './contracts/User';
import { useHistory } from "react-router-dom";

export default function Home() {
    const [user, setUser] = useState<User | null>(null);
    let history = useHistory();

    useEffect(() => {
        const cookies = new Cookies();
        const user = cookies.get('user');
        if (user) {
           setUser(user);
        } else {
            history.push('/login');
        }
    }, []);

    return (
        user ?
            <>
                <div>Welcome {user.displayName}</div>
            </> :
            <></>
    )
}
