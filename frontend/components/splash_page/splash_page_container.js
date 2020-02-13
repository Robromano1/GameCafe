import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import SplashPage from './splash_page';
import { login } from '../../actions/session_actions';

const mSTP = state => ({

})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(SplashPage);