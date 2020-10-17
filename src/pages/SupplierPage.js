import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SideMenu from '../components/supplier/SideMenu';
import Header from '../components/header/Header';
import Orders from '../components/supplier/Orders';
import PurchaseOrder from '../components/approvels/PurchaseOrder';
import Deliveries from '../components/supplier/Deliveries';
import DeliveryView from '../components/supplier/DeliveryView';

function SupplierPage() {
    return (
        <Switch>
            <Route exact path="/supplier">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="orders" />
                    <Orders />
                </div>
            </Route>
            <Route exact path="/supplier/orders">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="orders" />
                    <Orders />
                </div>
            </Route>
            <Route exact path="/supplier/orders/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="orders" />
                    <PurchaseOrder />
                </div>
            </Route>
            <Route exact path="/supplier/delivery">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="delivery" />
                    <Deliveries />
                </div>
            </Route>
            <Route exact path="/supplier/delivery/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="delivery" />
                    <DeliveryView />
                </div>
            </Route>
        </Switch>
    );
}

export default SupplierPage;
