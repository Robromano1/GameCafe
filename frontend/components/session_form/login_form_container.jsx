import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
    message: "Welcome back!",
    navLink: <Link to={"/signup"}>Register</Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);