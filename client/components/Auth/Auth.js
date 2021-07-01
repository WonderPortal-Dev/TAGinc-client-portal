import React, { useState } from 'react';
import {
	Typography,
	Button,
	TextField,
	Container,
	InputAdornment,
	IconButton,
} from '@material-ui/core';
import useStyles from './styles';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { signIn } from '../../services/authService';

const Auth = ({ toggleAuth }) => {
	const [fieldType, setFieldType] = useState('password');

	const toggleVisablity = () => {
		if ((fieldType = 'password')) setfieldType('text');
		else setFieldType('password');
	};

	const loginInitialState = {
		email: '',
		password: '',
	};

	const [loginDetails, setLoginDetails] = useState(loginInitialState);
	const classes = useStyles();

	const handleLogin = (e) => {
		e.preventDefault();
		signIn(loginDetails);
		console.log(
			`localStorage.getItem('user') is `,
			localStorage.getItem('user')
		);

		toggleAuth();
	};
	return (
		<Container component='main' maxWidth='xs'>
			<form onSubmit={handleLogin}>
				<Typography variant='h5'>Login</Typography>
				<TextField
					name='email'
					variant='outlined'
					label='Email'
					type='email'
					fullWidth
					value={loginDetails.email}
					onChange={(e) =>
						setLoginDetails({ ...loginDetails, email: e.target.value })
					}
				/>
				<TextField
					name='password'
					variant='outlined'
					label='Password'
					type={fieldType}
					fullWidth
					value={loginDetails.password}
					onChange={(e) =>
						setLoginDetails({ ...loginDetails, password: e.target.value })
					}
					endadornment={
						<InputAdornment position='end'>
							<IconButton onClick={toggleVisablity}>
								{fieldType === 'password' ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
				/>
				<Button type='submit'>submit</Button>
			</form>
		</Container>
	);
};

export default Auth;
