import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../auth/firebase-config';
import AuthContext from '../context/AuthContext'

export default function Navbar() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img src='icon.jpeg' style={{ width: '4rem' }} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mx-2">
                        <a className="nav-link font-weight-bold" href="/">Home</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link font-weight-bold" href="http://localhost:3000/favorites">Favorites</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link font-weight-bold" href="#">Cart</a>
                    </li>
                    {
                        !currentUser ?
                        (
                            <>
                                <li className="nav-item mx-2">
                                    <a className="nav-link font-weight-bold" href="/login">Login</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link font-weight-bold" href="sign-up">Sign Up</a>
                                </li>
                            </>
                        )

                :
                        (
                            <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 0}}>
                                <h4 className='text-light'>{currentUser.displayName}</h4>
                                <li className="nav-item mx-2">
                                    <a className="nav-link font-weight-bold" onClick={handleLogOut} style={{ display: 'flex', alignItems: 'center'}}>
                                        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>Logout</div> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right ml-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                        </svg>
                                    </a>
                                </li>
                            </div>
                        )
                    }


                </ul>
            </div>
        </nav>
    )
}