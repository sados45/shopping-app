import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../auth/firebase-config'

import './Navbar.css';
import AuthContext from '../../context/AuthContext';

export default function Navbar() {

    const { currentUser, counter } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
    };

    return (
        <nav className="navbar">
            <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                <i className="fa fa-bars"></i>
            </label>
            <a href="#" className="logo">logo</a>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="main-nav" id="js-menu">
                <li>
                    <a onClick={() => navigate('/')} className="nav-links">Home</a>
                </li>
                <li>
                    <a onClick={() => currentUser ? navigate('/favorites') : navigate('/login')} className="nav-links">Favorites</a>
                </li>
                <li>
                    <a className="nav-links">Cart({counter})</a>
                </li>
                {
                    currentUser ? (
                        <>
                            <li>
                                <a className="nav-links">{currentUser.displayName}</a>
                            </li>
                            <li>
                                <a className="nav-links" onClick={handleLogOut}>     
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right ml-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg></a>
                            </li>
                        </>
                    ) :
                        (
                            <>
                                <li>
                                    <a onClick={() => navigate('/login')} className="nav-links">Login</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/sign-up')} className="nav-links">Register</a>
                                </li>
                            </>
                        )
                }
            </ul>
        </nav>
    )
}