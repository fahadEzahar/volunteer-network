import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import Logo from '../../logos/Group 1329.png'
import './Header.css'

const Header = () => {
    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand " href="/home">
                        <img className="logo" src={Logo} alt="" />
                    </a>
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active m-3">
                            <a className="nav-link " href="/"> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item m-3">
                            <a className="nav-link " href="/">Donation</a>
                        </li>
                        <li className="nav-item m-3">
                            <a className="nav-link" href="/">Events <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item m-3">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                        {loggedInUserValue.email ?
                            <li className="nav-item m-3">
                                <a className="nav-link " href="/">{loggedInUserValue.displayName}</a>
                                <button className="btn btn-primary button ">Register</button>
                                <button className="btn btn-dark button">Admin</button>
                            </li>
                            :
                            <>
                                <li className="nav-item m-3">
                                    <button className="btn btn-primary">Register</button>
                                </li>
                                <li className="nav-item m-3">
                                    <Link to="/RegisterList">
                                        <button className="btn btn-dark">Admin</button>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;