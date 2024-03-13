import { z } from 'zod';

export const username = z
	.string({
		required_error: 'Username is required',
		invalid_type_error: 'Username must be a string',
	})
	.min(2, 'Username must be at least 2 characters long')
	.max(20, 'Username must be at most 20 characters long');

export const password = z
	.string({
		required_error: 'Password is required',
		invalid_type_error: 'Password must be a string',
	})
	.min(8, 'Password must be at least 8 characters')
	.max(50, 'Password must be at most 50 characters')
	.regex(
		/^(?=.*[A-Z])(?=.*\d).+/,
		'Password must contain at least one uppercase letter and one number'
	);

export const role = z.string({
	required_error: 'Role is required',
	invalid_type_error: 'Role must be a string',
});

export const university = z.string({
	required_error: 'University is required',
	invalid_type_error: 'University must be a string',
});
