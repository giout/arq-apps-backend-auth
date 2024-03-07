import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import { userService } from '../services/index.js';

const login = async (username, password) => {
	const user = await userService.getUserByUsername(username);
	if (!user)
		throw new ApiError('Username does not exist.', httpStatus.UNAUTHORIZED);
	if (!user.comparePassword(password))
		throw new ApiError('Password does not match.', httpStatus.UNAUTHORIZED);
	return user.populate('role university');
};

const changePassword = async (userId, password) => {
	const user = await userService.getUserById(userId);
	if (!user) {
		throw new ApiError('Username not found', httpStatus.NOT_FOUND);
	}
	user.password = password;
	await user.save();
	return user;
};

const authService = {
	login,
	changePassword,
};

export default authService;
