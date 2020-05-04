import React from "react";
import './header.css'

const Header = () => (
    <header className='header'>
        <nav className='main-nav'>
            <ul>
                <li><a href="#">Own</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;