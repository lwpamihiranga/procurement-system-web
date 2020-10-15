import React from 'react';
import './SideMenu.css';

function SideMenu({ navName }) {
    // console.log(navName);
    return (
        <div className="sidebar">
            <a
                className={navName === 'dashboard' ? 'active' : ''}
                href="/dashboard"
            >
                Dashboard
            </a>
            <a
                className={navName === 'requisitions' ? 'active' : ''}
                href="/requisitions"
            >
                Requisitions
            </a>
            <a
                className={navName === 'approvels' ? 'active' : ''}
                href="/approvels"
            >
                Approvels
            </a>
            <a
                className={navName === 'inquire' ? 'active' : ''}
                href="/inquire"
            >
                Inquire
            </a>
            <a
                className={navName === 'signout' ? 'active' : ''}
                href="/signout"
            >
                Sign Out
            </a>
        </div>
    );
}

export default SideMenu;
