import jwt from 'jsonwebtoken';
require('dotenv').config();

// * Authentication
// * verify Token, check User roles in database

const jwtAuth = async (req, res, next) => {
	try {
		// get token
		// if authHeader doesn't exist, token will return undefined
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];

		// if token doesn't exist, return no token
		if (!token) {
			return res.status(401).send({
				message: 'No token provided!',
			});
		}

		// * verify token
		jwt.verify(token, 'process.env.ACCESS_TOKEN_SECRET', (err, user) => {
			if (err) {
				return res.status(403).send({
					message: 'Unauthorized!',
				});
			}
			// * retrieve user object that has email, uid and type
			// * the middleware after this jwtAuth should have access to req.user, then can use filter to get user only posts/requests
			req.user = user;
			next();
		});
	} catch (error) {
		console.log('err in jwtAuth: ', error);
	}
};

export default jwtAuth;
