import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Photo from './BBC.png';

export  const Navbar=()=> {
     
    let location = useLocation();
    React.useEffect(() => {
    console.log(location);
    }, [location]);
        return <div>
            <nav style={{backgroundColor: "rgb(187,25,25)"}} className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                {/* <img src={Photo} height="30" width="100" alt="BBC" /> */}
                    <h1 className="mx-3" style={{color:"white"}}>NEWS</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link "  to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/Business"?"active":""}`}  to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/Entertainment"?"active":""}`}  to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/General"?"active":""}`}  to="/General">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/Health"?"active":""}`}  to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/Science"?"active":""}`}  to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/Sports"?"active":""}`}  to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/Technology"?"active":""}`}  to="/Technology">Technology</Link>
                            </li>
                         
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>;
    
}
