import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import SideMenu from '../components/side-menu/SideMenu';
import Requisitions from '../components/requisitions/Requisitions';
import ApproveRequisition from '../components/requisitions/ApproveRequisition';
import Approvels from '../components/approvels/Approvels';
import PurchaseOrder from '../components/approvels/PurchaseOrder';
import Inquire from '../components/inquire/Inquire';
import InquiryDetails from '../components/inquire/InquiryDetails';

function ManagementStaffPage() {
    return (
        <Switch>
            <Route exact path="/management">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="requisitions" />
                    <Requisitions />
                </div>
            </Route>
            <Route exact path="/management/requisitions">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="requisitions" />
                    <Requisitions />
                </div>
            </Route>
            <Route exact path="/management/requisitions/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="requisitions" />
                    <ApproveRequisition />
                </div>
            </Route>
            <Route exact path="/management/approvels">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="approvels" />
                    <Approvels />
                </div>
            </Route>
            <Route exact path="/management/approvels/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="approvels" />
                    <PurchaseOrder />
                </div>
            </Route>
            <Route exact path="/management/inquire">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="inquire" />
                    <Inquire />
                </div>
            </Route>
            <Route exact path="/management/inquire/:id">
                <Header />
                <div style={{ marginTop: 45 }}>
                    <SideMenu navName="inquire" />
                    <InquiryDetails />
                </div>
            </Route>
        </Switch>
    );
}

export default ManagementStaffPage;
