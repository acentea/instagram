import React from 'react';
import instagramImage from './headerIcons/instagram.png';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './header.css';

export default function Header() {
    return (
        <>
            <div className='header'>
                <div className='header-image'>
                    <div><img src={instagramImage}/></div>
                </div>
                <div className='header-buttons'>
                    <div><HomeIcon/></div>
                    <div><MessageIcon/></div>
                    <div><FavoriteIcon/></div>
                </div>
            </div>
        </>
    )
}
