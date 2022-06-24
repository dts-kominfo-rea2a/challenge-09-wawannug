// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Call a Friend</h1>
            <p>your friend contact app</p>
            <span>***********************************</span>
        </div>
    )
}

export default Header;