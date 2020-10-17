import React from 'react';
import '../side-menu/SideMenu.css';

function SideMenu({ navName }) {
    // console.log(navName);
    return (
        <div className="sidebar">
            <a
                className={navName === 'orders' ? 'active' : ''}
                href="/supplier/orders"
            >
                Orders
            </a>
            <a
                className={navName === 'delivery' ? 'active' : ''}
                href="/supplier/delivery"
            >
                Delivery
            </a>
        </div>
    );
}

export default SideMenu;
