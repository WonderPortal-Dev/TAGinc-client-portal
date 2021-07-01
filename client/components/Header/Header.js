import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Typography,
	Toolbar,
	Button,
	Avatar,
	Dialog,
} from '@material-ui/core';
import Auth from '../Auth/Auth';
import useStyles from './styles';
import decode from 'jwt-decode';
import { signOut } from '../../services/authService';

const Header = () => {
	const [openAuth, setOpenAuth] = useState(false);

	const classes = useStyles();

	const logout = () => {
		signOut();
		// toggleAuth();
	};

	const toggleAuth = () => setOpenAuth((prev) => !prev);

	const [userAuth, setUserAuth] = useState(
		JSON.parse(localStorage.getItem('user'))
	);

	useEffect(() => {
		const token = userAuth?.accessToken;

		console.log('token: ', token);
		if (token) {
			const decodedToken = decode(token);

			console.log('decodedToken: ', decodedToken);
		}
	}, []);

	useEffect(() => {}, [openAuth]);
	/** decoded Token
   *email: "test4@test4.com"
    exp: 1625100094
    iat: 1625096494
    type: "User"
    uid: 11
   */

	return (
		<AppBar className={classes.appBar} position='sticky' color='inherit'>
			<div className={classes.brandContainer}>
				<Typography
					// component={Link}
					// to="/"
					className={classes.heading}
					variant='h2'
					align='center'
				>
					TAGinc Client-Portal
				</Typography>
				{/* <img src={logo} alt="logo" height="60" /> */}
			</div>

			<Toolbar className={classes.toolbar}>
				{userAuth ? (
					<Button variant='contained' color='secondary' onClick={logout}>
						Logout
					</Button>
				) : (
					<Button variant='contained' color='primary' onClick={toggleAuth}>
						signIn
					</Button>
				)}
			</Toolbar>
			<Dialog open={openAuth} onBackdropClick={toggleAuth}>
				<Auth toggleAuth={toggleAuth} />
			</Dialog>
		</AppBar>
	);
};

export default Header;

// localStorage.setItem('profile', JSON.stringify({...action?.data}));

// const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
