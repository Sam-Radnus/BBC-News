import React from 'react';
import Photo from '../BBC.png';
import {Link} from 'react-router-dom';
import Background from './umbrella.jpg'
export default function Modal() {
    let floatStyle = {
        
        width:'40vw'
    }
    let ModalStyle={
        position: 'absolute',
        top:'30%',
        left:'10%',
         zIndex: '5',
         backgroundColor:'white',
         height:'fit-content',
         width:'fit-content',
         padding:'5vw'
    }
    return <div  style={{ backgroundImage: `url(${Background})`,height:'100vh',width:'98.79vw'}}>
         <div style={ModalStyle}>
            <p style={{marginLeft:'-25px'}}><img src={Photo} className="ms-4" height="35" width="95" alt="BBC" /></p>
            <h1 style={{textAlign:'left'}}>Sign In</h1>
            <form action="">
                <div className="form-floating mb-3">
                    <input type="email" style={floatStyle} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label >Email or Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" style={floatStyle}   className="form-control" id="floatingPassword" placeholder="Password" />
                    <label >Password</label>
                </div>
            </form>
            <button style={{width:'40vw',color:'white',backgroundColor:'rgb(0,91,200)',border:'none',marginTop:'5px',padding:'10px'}}>Sign-In</button>
            <h1 className='my-3' >Don't have a BBC Account</h1>
            <Link style={{fontWeight:'700'}}to="/Sign-In">Register Now</Link>
        </div> 
    </div>;
}
