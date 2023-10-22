import React from 'react';
import "../styles/navbar.css"

function Navbar(props) {
    return (
        <div className='NavbarContainer'>
            <ul className='NavbarUl'>
                <li><a href='/' >Create Alert</a></li>
                <li><a href='/submitDoc'>Submit Document</a></li>
                <li><a href='/viewAlert'>View Alert</a></li>
            </ul>
        </div>
    );
}

export default Navbar;