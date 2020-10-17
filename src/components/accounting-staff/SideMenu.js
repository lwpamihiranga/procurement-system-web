import React from 'react';
import '../side-menu/SideMenu.css';

function SideMenu({ navName }) {
    return (
        <div className="sidebar">
            <a
                className={navName === 'receipts' ? 'active' : ''}
                href="/accounting/receipts"
            >
                Good Receipts
            </a>
            <a
                className={navName === 'invoices' ? 'active' : ''}
                href="/accounting/invoices"
            >
                Invoices
            </a>
            <a
                className={navName === 'payments' ? 'active' : ''}
                href="/accounting/payments"
            >
                Payments
            </a>
        </div>
    );
}

export default SideMenu;
