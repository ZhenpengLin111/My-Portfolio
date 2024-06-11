// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="Navbar">
            <div className='navbar'>
                <div className="left-side">
                    ZPL の 小窝
                </div>
                <ul className="right-side">
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    {/* <li><Link to="/Movies" onClick={handleLinkClick}>Movies</Link></li> */}
                    <li><Link to="/Projects" onClick={handleLinkClick}>Projects</Link></li>
                    <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
                </ul>
            </div>
            
            <input type='checkbox' className='menu-btn' id='menu-btn' checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
            <label htmlFor='menu-btn' className='menu-icon'>
                <span className='nav-icon'></span>
            </label>
            <ul className='nav-2'>
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                {/* <li><Link to="/Movies" onClick={handleLinkClick}>Movies</Link></li> */}
                <li><Link to="/Projects" onClick={handleLinkClick}>Projects</Link></li>
                <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
