import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
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
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="message">{message}</h2>
                    
                    {this.renderErrors()}
                    
                    <div className="login-form">
                        <label>Username:
                            <input type="text" 
                            value={this.state.username}
                            onChange={this.update('username')}/>
                        </label>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')} />
                        </label>
                        <input type="submit" value={formType}/>
                        <br/>
                        {navLink}
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;