/*
 * Authentication
 * uses Axios for HTTP requests and Local Storage for user information & JWT
 * signIn(): POST {email, password} & save JWT to Local Storage
 * signOut(): remove JWT from Local Storage
 * signUp(): POST {firstName, lastName, email, password, type}
 * getCurrentUser(): get stored user information (including JWT)
 */
import axios from 'axios';

// ! filled out backend route
// ! also double check axios post link route with backend
const API_URL = 'http://localhost:3000/user/';

export const signIn = (user) => {
	try {
		//console.log('user in authService is: ', user);
		axios.post(`${API_URL}signin`, user).then((response) => {
			//console.log('response is: ', response);
			if (response.data.accessToken) {
				//console.log('response in signIn authService is: ', response);
				localStorage.setItem('user', JSON.stringify(response.data));
			}

			return response.data;
		});
	} catch (error) {
		console.log('err in authService signIn: ', error);
	}
};

export const signOut = () => {
	localStorage.removeItem('user');
	console.log('signOut');
};

//user info: email, password, firstName, lastName, confirmPassword, type
export const signUp = async (user) => {
	try {
		console.log('in signUp in authService');
		await axios.post(`${API_URL}signup`, user);
	} catch (error) {
		console.log('err in authService signUp');
	}
};

export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};
