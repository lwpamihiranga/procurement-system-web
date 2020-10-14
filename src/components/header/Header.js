import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    

    return (
        <nav className="navbar navbar-light fixed-top">
            <div className="navbar-nav ml-auto logout-div">
                <button className="btn-sm my-2 my-sm-0">
                    Log Out
                </button>
            </div>
        </nav>
    );
}

export default Header;
