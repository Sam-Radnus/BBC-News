import React, { Component } from 'react';
import Photo from './BBC.png';
import 'font-awesome/css/font-awesome.min.css';
export default class TopNav extends Component {
    render() {
        return <div>
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={Photo} className="ms-4" height="40" width="120" alt="BBC" />
                <div className="container-fluid">
                <i className="fas fa-user-circle"></i> <a className="navbar-brand ms-1">Sign in</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                         { <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item">Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>
                         
                        </ul>  }
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
