import React from 'react';
import './SideMenu.css';

function SideMenu({ navName }) {
    return (
        <div className="sidebar">
            <a
                className={navName === 'requisitions' ? 'active' : ''}
                href="/management/requisitions"
            >
                Requisitions
            </a>
            <a
                className={navName === 'approvels' ? 'active' : ''}
                href="/management/approvels"
            >
                Approvals
            </a>
            <a
                className={navName === 'inquire' ? 'active' : ''}
                href="/management/inquire"
            >
                Inquiries
            </a>
        </div>
    );
}

export default SideMenu;
