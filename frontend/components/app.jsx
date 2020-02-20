import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashPageContainer from './splash_page/splash_page_container';
import ServerContainer from './server/server_container';
import ChatRoom from './chat/chat_room';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
        {/* <header>
            <Link to="/" className="header-link">
                <h1>Game Cafe</h1>
                <img className="logo" src={window.gamecafeURL} />;
            </Link>
            
        </header> */}
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
            <ProtectedRoute exact path="/channels/:channelId" component={ServerContainer} />
            {/* <Route exact path="/channels/@me" component={ChatRoom} /> */}
            <Route exact path="/" component={SplashPageContainer}/>
        </Switch>
    </div>
)

export default App;