import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/error_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Signup',
    title: 'Create an account',
    navLink: <Link to={"/login"}>Already have an account?</Link>,
    session: {
        email: "",
        username: "",
        password: ""
    }
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);