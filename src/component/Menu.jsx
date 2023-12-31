import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive? "active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active-item":"pending-item"}to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active-item":"pending-item"}to="/login/jasim/12345">Login</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active-item":"pending-item"}to="/product">Product</NavLink></li>
            </ul>
            
        </div>
    );
};

export default Menu;