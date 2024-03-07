import ApiError from '../utils/ApiError.js';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import ApiResponse from '../utils/ApiResponse.js';
import { ZodError } from 'zod';

export const errorHandler = (err, req, res, next) => {
	if (err instanceof ZodError) {
		return ApiResponse(res, {
			code: httpStatus.BAD_REQUEST,
			message: err.message,
		});
	}
	console.log(err)
	if (err instanceof mongoose.Error) {
		return ApiResponse(res, {
			code: httpStatus.BAD_REQUEST,
			message: err.message,
		});
	}

	if (err instanceof ApiError) {
		return ApiResponse(res, { code: err.statusCode, message: err.message });
	}

	return ApiResponse(res, {
		code: httpStatus.INTERNAL_SERVER_ERROR,
		message: err.message,
	});
};
