import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';

export const validate = (schema) => {
	return async (req, res, next) => {
		const result = schema.safeParse(req.body);

		if (result.error) {
			const errorMessage = JSON.stringify(
				result.error.issues.map((issue) => issue.message)
			);
			next(new ApiError(errorMessage, httpStatus.BAD_REQUEST));
		}

		next();
	};
};
