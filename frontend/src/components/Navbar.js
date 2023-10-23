import React from 'react';
import "../styles/navbar.css"
import { useNavigate } from 'react-router-dom';


function Navbar(props) {

    const navigate = useNavigate();

    return (
        <div className='NavbarContainer'>
            <ul className='NavbarUl'>
                <li onClick={() => {navigate('/')}} className='NavbarLinks'><span>Create Alert</span></li>
                <li onClick={() => {navigate('/submitDoc')}} className='NavbarLinks'><span>Submit Document</span></li>
                <li onClick={() => {navigate('/viewAlert')}} className='NavbarLinks'><span>View Alerts</span></li>
            </ul>
        </div>
    );
}

export default Navbar;