/*
 * The HTTP request needs Authorization header
 * Checks Local Storage for user item. If there is a signed in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.
 */
export default authHeader = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	if (user && user.token) {
		return { Authorization: 'Bearer ' + user.accessToken };
	} else {
		return {};
	}
};
