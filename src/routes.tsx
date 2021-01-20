import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SigIn from './pages/SigIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={SigIn} path="/" exact />
            <Route component={SignUp} path="/signup" />
            <Route component={ForgotPassword} path="/forgot" />
            <Route component={ResetPassword} path="/reset" />

            <Route component={Dashboard} path="/dashboard" />
            <Route component={CreateEvent} path="/create-event" />

        </BrowserRouter>
    )
}

export default Routes;