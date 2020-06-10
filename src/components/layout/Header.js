import React from 'react';
import {Link} from 'react-router-dom';

 function Header() {
    return (
        <header style={Headerstyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}


const Headerstyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
    
};
export default Header;