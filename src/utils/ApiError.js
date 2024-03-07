class ApiError extends Error {
	statusCode;

	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

export default ApiError;
