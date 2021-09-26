import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-box">
                <img src={logo} alt="" />
            </div>
            <div className="logo-area">
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
            </div>
        </div>
    );
};

export default Header;