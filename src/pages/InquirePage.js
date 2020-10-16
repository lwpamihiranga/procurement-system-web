import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Inquire from '../components/inquire/Inquire'
import InquiryDetails from '../components/inquire/InquiryDetails'
import Header from '../components/header/Header'


function InquirePage() {
    return (
        <Switch>
            <Route exact path="/inquire">
                <Header/>
                <div style={{marginTop:45}}>
                    <SideMenu navName="inquire" />
                    <Inquire />
                </div>
            </Route>
            <Route exact path="/inquire/:id">
                <Header/>
                <div style={{marginTop:45}}>
                    <SideMenu navName="inquire" />
                    <InquiryDetails />
                </div>
            </Route>                  
        </Switch>
    );
}

export default InquirePage;
