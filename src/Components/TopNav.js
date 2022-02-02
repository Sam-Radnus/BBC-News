import React, { Component } from 'react';
import Photo from './BBC.png';
import 'font-awesome/css/font-awesome.min.css';
import {Link } from 'react-router-dom';
export default class TopNav extends Component {
    render() {
        return <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={Photo} className="ms-4" height="40" width="120" alt="BBC" />
                <div className="container-fluid">
                    <i className="fas fa-user-circle"></i>
                    <Link to="/Sign-In">Sign in</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        {<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page">Sport</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page">Reel</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page">Worklife</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page">Travel</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page">Future</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page">Culture</a>
                            </li>


                        </ul>}
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>;
    }
}
