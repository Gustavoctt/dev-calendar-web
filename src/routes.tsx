import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SigIn from './pages/SigIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={SigIn} path="/" exact />
            <Route component={SignUp} path="/signup" />
            <Route component={ForgotPassword} path="/forgot" />
            <Route component={ResetPassword} path="/reset" />
        </BrowserRouter>
    )
}

export default Routes;