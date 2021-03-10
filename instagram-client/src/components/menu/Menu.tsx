import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './menu.css';

export default function Menu(props) {
    const showMenu = props.showMenu;
    return (
        showMenu ?
        <>

            <div className='menu'>
                <div><PersonOutlineIcon></PersonOutlineIcon> Profile</div>
                <div><SettingsIcon></SettingsIcon> Settings</div>
                <div><ExitToAppIcon></ExitToAppIcon> Logout</div>
            </div>
        </> : <></>
    )
}
