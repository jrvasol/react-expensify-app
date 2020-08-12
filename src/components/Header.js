import React from 'react';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                </li>
                <li>
                    <button onClick={startLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);