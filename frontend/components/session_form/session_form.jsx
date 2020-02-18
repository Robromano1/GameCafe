import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: "",
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => this.props.history.push("/channels/@me"));
    }

    handleGuest(e) {
        e.preventDefault();
        this.processForm({
            email: "guestuser@gmail.com",
            username: "guest_account1",
            password: "password123"
        }).then(() => this.props.history.push("/channels/@me"));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map(error => (
                    <li key={`error-${error.id}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { formType, navLink, title } = this.props;
        if (formType === 'Signup') {
        
            return (
              	<div className="outer-container">
                    <h1 className="home">
                        <Link to="/">Game Cafe</Link>
                    </h1>
                    <div className="signup-form-container theme-dark">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderErrors()}

                            <h2 className="signup-message">{title}</h2>
                            <div className="input-wrapper">
                                <div className="email-field">
                                    <h5>EMAIL</h5>
                                        <input 
                                            id="session-form-email-input"
                                            className="session-form-input"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.update('email')} 
                                        />
                                </div>
                                <div className="username-field">
                                    <h5>USERNAME</h5>
                                        <input 
                                            id="session-form-username-input"
                                            className="session-form-input"
                                            type="text"
                                            value={this.state.username}
                                            onChange={this.update('username')} 
                                        />
                                </div>
                                <div className="password-field">
                                    <h5>PASSWORD</h5>
                                        <input 
                                            id="session-form-password-input"
                                            className="session-form-input"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')} 
                                        />
                                </div>
                                <br/>
                                <div className="sub-button">
                                    <button 
                                    className="session-submit" 
                                    type="submit" 
                                    value={formType}>
                                        <div className="content-text">Continue</div>
                                    </button>
                                </div>
                                <br />
                                <div className="navContent">{navLink}</div>
                             
                                {/* <p className="contents">{navLink}</p> */}
                            </div>
                        </form>
                    </div>       
                </div>
                
            )
        } else if(formType === 'Login') {
            return (
                
                <div className="login-outer-container">
                    <div className="login-form-container theme-dark">
                        <form onSubmit={this.handleSubmit}>
                            <div className="login-message">
                                <h2 className="title">Welcome back!</h2>
                                <h3 className="sub-title">We're so excited to see you again!</h3>
                            </div>

                            {this.renderErrors()}

                            <div className="login-wrapper">
                                <div className="login-email">
                                    <h5>EMAIL</h5>
                                        <input 
                                            id="session-form-email-input"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.update('email')} 
                                        />
                                </div>
                                <div className="login-password">
                                    <h5>PASSWORD</h5>
                                        <input 
                                            id="session-form-password-input"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')} 
                                        />
                                </div>
                                <br/>
                                <div className="login-button">
                                    <button 
                                    className="session-submit" 
                                    type="submit" 
                                    value={formType}>
                                        <div className="content-text">Login</div>
                                    </button>
                                </div>
                                <br />
                                <div className="loginNavContent">
                                    <span>Need an account?</span>
                                    <p>{navLink}</p>
                                </div>
                                <div className="guestUser">
                                    <button type="submit" onClick={this.handleGuest} className="guestButton">Sign in as a guest</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            )
        }
    }
}

export default SessionForm;