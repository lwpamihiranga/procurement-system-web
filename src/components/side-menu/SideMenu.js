import React from 'react';
import './SideMenu.css';

function SideMenu({ navName }) {
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
                Approvals
            </a>
            <a
                className={navName === 'inquire' ? 'active' : ''}
                href="/inquire"
            >
                Inquiries
            </a>
        </div>
    );
}

export default SideMenu;
