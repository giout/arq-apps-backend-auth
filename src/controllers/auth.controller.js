import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync.js';
import { userService, authService } from '../services/index.js';
import httpMessages from '../utils/httpMessages.js';
import ApiResponse from '../utils/ApiResponse.js';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

const register = catchAsync(async (req, res) => {
	await userService.createUser(req.body);
	const { username, password } = req.body;
	const user = await authService.login(username, password);
	const token = user.createToken();
	ApiResponse(res, {
		data: { token, user: user.toJSON() },
		message: httpMessages.REGISTER,
		code: httpStatus.CREATED,
	});
});

const login = catchAsync(async (req, res) => {
	const { username, password } = req.body;
	const user = await authService.login(username, password);
	const token = user.createToken();
	ApiResponse(res, {
		message: httpMessages.LOGIN,
		code: httpStatus.OK,
		data: { token, user: user.toJSON() },
	});
});

const verify = catchAsync(async (req, res) => {
	// verify token is valid
	jwt.verify(req.body.token, SECRET, async (err, payload) => {
		if (err){
			return ApiResponse(res, {
				code: httpStatus.UNAUTHORIZED,
				message: httpMessages.INVALID_AUTH,
			});
		}
		
		const user = await userService.getUserById(payload.id);
		if (!user){
			return ApiResponse(res, {
				code: httpStatus.UNAUTHORIZED,
				message: httpMessages.INVALID_AUTH,
			});
		}

		ApiResponse(res, {
			message: httpMessages.FETCH,
			code: httpStatus.OK,
			data: user,
		});
	});
});

const authController = {
	register,
	login,
	verify,
};

export default authController;
