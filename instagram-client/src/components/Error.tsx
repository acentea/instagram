import React, {useState} from 'react';
import './css/common.css';

export default function Error(props) {
    return (
        <>
            <div className='font-red'>{props.errorMessage}</div>
        </>
    );
}
