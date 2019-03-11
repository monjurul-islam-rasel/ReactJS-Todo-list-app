import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
        <h1>
            Todo Lists
        </h1>

        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        
    </header>    
  )
}

const headerStyle = {
    background: '#060f46a8',
    textAlign: 'center',
    color: 'white',
    padding: '10px'
}


export default Header
