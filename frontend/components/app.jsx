import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashPageContainer from './splash_page/splash_page_container';
import Me from './me/me';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
            <ProtectedRoute path="/channels" component={Me}/>
            <AuthRoute exact path="/" component={SplashPageContainer}/>
        </Switch>
    </div>
)

export default App;