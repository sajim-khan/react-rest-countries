import React from 'react';
import './Header.css'
const Header = () => {
    return (
      <div>
        <h1>This is header section</h1>
        <nav>
          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
        </nav>
      </div>
    );
};

export default Header;