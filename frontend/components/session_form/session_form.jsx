import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = this.props.session;
        this.demoEmail = "demo_user@demo.com";
        this.demoPassword = "coffeelife123";
        this.demoLogin = this.demoLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    componentWillUnmount() {
        if(this.props.errors.length) {
            this.props.clearErrors();
        }
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => {
               
                this.props.history.push("/channels/")
            }) 
    }

    demoLogin() {
        const email = this.demoEmail;
        const password = this.demoPassword;
        const speed = 60;
        for (let i = 0; i < email.length; i++) {
            setTimeout(() => {
                this.setState({ email: this.state.email + email[i] });
            }, i * speed);
        }
        for (let j = 0; j < password.length; j++) {
            setTimeout(() => {
                this.setState({ password: this.state.password + password[j] })
            }, (email.length * speed) + j * speed);
        }
        setTimeout(() => {
            this.props.processForm(this.state).then(() => this.props.history.push('/channels'));
        }, (email.length * speed) + (password.length * speed) + speed);
    }

    render() {
        const { formType, navLink, title } = this.props;
        let demoButton = <div 
                            className="form-demo"
                            onClick={this.demoLogin}>
                                Use my account!
                         </div>
        
        let errors = "";
        const inputs = document.getElementsByClassName('session-form-input');
        
        if(this.props.errors.length) {
            errors = this.props.errors.map((error, idx) => {
                return (
                    <p key={idx} className="errors">{error}</p>
                )
            })
            
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add("error");
            }
        } else {
            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].classList.contains("error")) {
                    inputs[i].classList.remove("error");
                }
            }
        }

        let signupErrors = this.props.errors;
        let emailError, usernameError, passError;
        if (
            signupErrors[0] == "This field is required" &&
            signupErrors[1] == "This field is required" &&
            signupErrors[2] == "This field is required"
        ) {
            emailError = signupErrors[0];
            usernameError = signupErrors[1];
            passError = signupErrors[2];
        }

        const emailErrorStyle = document.getElementsByClassName("email-section")
       
        if(this.props.errors.length) {
            for(let i = 0; i < emailErrorStyle.length; i++) {
                emailErrorStyle[i].classList.add("emailError")
            }
        } else {
            for(let i = 0; i < emailErrorStyle.length; i++) {
                if(emailErrorStyle[i].classList.contains("emailError")){
                    emailErrorStyle[i].classList.remove("emailError")
                }
            }
        }

        const usernameErrorStyle = document.getElementsByClassName("username-section")
        if (this.props.errors.length) {
            for (let i = 0; i < usernameErrorStyle.length; i++) {
                usernameErrorStyle[i].classList.add("usernameError")
            }
        } else {
            for (let i = 0; i < usernameErrorStyle.length; i++) {
                if (usernameErrorStyle[i].classList.contains("usernameError")) {
                    usernameErrorStyle[i].classList.remove("usernameError")
                }
            }
        }

        const passErrorStyle = document.getElementsByClassName("pass-section")
        if (this.props.errors.length) {
            for (let i = 0; i < passErrorStyle.length; i++) {
                passErrorStyle[i].classList.add("passError")
            }
        } else {
            for (let i = 0; i < passErrorStyle.length; i++) {
                if (passErrorStyle[i].classList.contains("passError")) {
                    passErrorStyle[i].classList.remove("passError")
                }
            }
        }
                         
        if (formType === 'Signup') {
        
            return (
              	<div className="outer-container">
                    <div className="signup-form-container theme-dark">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className="signup-message">{title}</h2>
                            <div className="input-wrapper">
                                <div className="email-field">
                                    <h5>EMAIL</h5>
                                    <div className="errors email-section">{emailError}</div>
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
                                    <div className="errors username-section">{usernameError}</div>
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
                                    <div className="errors pass-section">{passError}</div>
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
                            {errors}
                            <div className="login-wrapper">
                                <div className="login-email">
                                    <h5>EMAIL</h5>
                                        <input 
                                            id="session-form-email-input"
                                            className="session-form-input"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.update('email')} 
                                        />
                                </div>
                                <div className="login-password">
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
                                <div className="demo-user">
                                    {demoButton}
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