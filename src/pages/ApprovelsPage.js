import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Approvels from '../components/approvels/Approvels';
import Header from '../components/header/Header';
import PurchaseOrder from '../components/approvels/PurchaseOrder';

function ApprovelsPage() {
    return (
        <Switch>
            <Route exact path="/approvels">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="approvels" />
                    <Approvels />
                </div>
            </Route>
            <Route exact path="/approvels/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="approvels" />
                    <PurchaseOrder />
                </div>
            </Route>
        </Switch>
    );
}

export default ApprovelsPage;
