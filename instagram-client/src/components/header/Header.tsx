import React from 'react';
import instagramImage from './headerIcons/instagram.png';

export default function Header() {
    return (
            <>
                <div className='header'>
                    <img src={instagramImage} width='100' height='50' />
                </div>
            </>
    )
}
