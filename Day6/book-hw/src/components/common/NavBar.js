import React from 'react'
import {signOut} from 'firebase/auth';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase';

export default function NavBar(props) {

    async function onLogoutClick() {
        try {
            await signOut(auth);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className = 'bi bi-list'></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            props.user ? 
                            <>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={onLogoutClick} className='btn btn-primary'>
                                    Logout</button>
                            </li>
                            
                            </>
                            :
                            <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Register">Register</Link>
                            </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            </nav>
    )
}
