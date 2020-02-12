import React from 'react';

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
        this.props.processForm(user);
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
        const { formType, navLink, message } = this.props;
        if (formType === 'Signup') {
            return (
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="message">{message}</h2>

                        {this.renderErrors()}

                        <div className="signup-form theme-dark">
                            <label>Email:
                            <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')} />
                            </label>
                            <label>Username:
                            <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')} />
                            </label>
                            <label>Password:
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')} />
                            </label>
                            <input type="submit" value={formType} />
                            <br />
                            {navLink}
                        </div>
                    </form>
                </div>
            )
        } else if(formType === 'Login') {
            return (

                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="message">{message}</h2>

                        {this.renderErrors()}

                        <div className="login-form theme-dark">
                            <label>Email:
                            <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')} />
                            </label>
                            <label>Password:
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')} />
                            </label>
                            <input type="submit" value={formType} />
                            <br />
                            {navLink}
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default SessionForm;