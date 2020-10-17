import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import SideMenu from '../components/accounting-staff/SideMenu';
import GoodReceiptsList from '../components/good-receipts/GoodReceiptsList';
import GoodReceipt from '../components/good-receipts/GoodReceipt';
import InvoiceList from '../components/invoices/InvoiceList';
import Invoice from '../components/invoices/Invoice';
import PaymentList from '../components/payments/PaymentList';
import Payment from '../components/payments/Payment';

function SupplierPage() {
    return (
        <Switch>
            <Route exact path="/accounting">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="receipts" />
                    <GoodReceiptsList />
                </div>
            </Route>
            <Route exact path="/accounting/receipts">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="receipts" />
                    <GoodReceiptsList />
                </div>
            </Route>
            <Route exact path="/accounting/receipts/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="receipts" />
                    <GoodReceipt />
                </div>
            </Route>
            <Route exact path="/accounting/invoices">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="invoices" />
                    <InvoiceList />
                </div>
            </Route>
            <Route exact path="/accounting/invoices/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="invoices" />
                    <Invoice />
                </div>
            </Route>
            <Route exact path="/accounting/payments">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="payments" />
                    <PaymentList />
                </div>
            </Route>
            <Route exact path="/accounting/payments/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="payments" />
                    <Payment />
                </div>
            </Route>
        </Switch>
    );
}

export default SupplierPage;
