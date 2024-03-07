const ApiResponse = (res, { data, message, code }) => {
	const response = { message };

	if (data) response.data = data;

	return res.status(code).json(response);
};

export default ApiResponse;
