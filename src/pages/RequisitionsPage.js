import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Requisitions from '../components/requisitions/Requisitions';
import Header from '../components/header/Header';
import ApproveRequisition from '../components/requisitions/ApproveRequisition';

function DashboardPage() {
    return (
        <Switch>
            <Route exact path="/requisitions">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="requisitions" />
                    <Requisitions />
                </div>
            </Route>
            <Route exact path="/requisitions/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="requisitions" />
                    <ApproveRequisition />
                </div>
            </Route>
        </Switch>
    );
}

export default DashboardPage;
