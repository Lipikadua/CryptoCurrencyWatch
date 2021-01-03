import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

export default function NavBar() {
    return (
        <div id="header">
        <nav className="nav p-1 m-1">
            <h2>
                <Link  to="/" style={{fontStyle: 'oblique', justifyContent:'left', textAlign:'left'}}>
                <img className ='left' src= {logo}  
              style={{height:'10vh', width: '10vw', borderRadius: '45%',justifyContent:'left', textAlign:'left' }} 
               alt= "logo"></img> 
               CryptoWatch</Link>
            </h2>
        </nav>
         </div>
    )
}
