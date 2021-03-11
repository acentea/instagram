import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './menu.css';
import {Grid} from "@material-ui/core";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

export default function Menu(props) {
    const showMenu = props.showMenu;
    const width = props.width;
    const cookies = new Cookies();
    let history = useHistory();

    const logout = () => {
        cookies.remove('user', { path: '/' });
        history.push('/login');
    };

    return (
        showMenu ?
        <>
            <div className='menu' style={{ width: width }} >
                <Grid container direction="row" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <PersonOutlineIcon></PersonOutlineIcon>
                    </Grid>
                    <Grid item>
                        Profile
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <SettingsIcon></SettingsIcon>
                    </Grid>
                    <Grid item>
                        Settings
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="flex-start" spacing={2} onClick={logout}>
                    <Grid item>
                        <ExitToAppIcon></ExitToAppIcon>
                    </Grid>
                    <Grid item>
                        Logout
                    </Grid>
                </Grid>
            </div>
        </> : <></>
    )
}
