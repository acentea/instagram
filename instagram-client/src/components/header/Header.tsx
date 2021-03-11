import React, {useEffect, useRef, useState} from 'react';
import instagramImage from './headerIcons/instagram.png';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Menu from '../menu/Menu'
import './header.css';
import Cookies from 'universal-cookie';

const useStyles = makeStyles((theme) => ({
    avatar: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));

export default function Header() {
    const classes = useStyles();

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [displayName, setDisplayName] = useState<string>('');

    const homeIcon = useRef<HTMLHeadingElement>(null);
    const numberOfIcons : number = 4;
    const width : number = (homeIcon.current ? homeIcon.current.clientWidth : 20) * numberOfIcons;

    useEffect(() => {
        const cookies = new Cookies();
        const user = cookies.get('user');
        if (user) {
            setDisplayName(user.displayName);
        }
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className='header'>
                <div className='header-image'>
                    <div><img src={instagramImage}/></div>
                </div>
                <div className='header-buttons'>
                    <div ref={homeIcon}>
                        <HomeIcon/>
                        <Menu className='menu' showMenu={showMenu} width={width}/>
                    </div>
                    <div><MessageIcon/></div>
                    <div><FavoriteIcon/></div>
                    <div onClick={toggleMenu}>
                        <Avatar className={classes.avatar}>{displayName.charAt(0).toLocaleUpperCase()}</Avatar>
                    </div>
                </div>
            </div>
        </>
    )
}
