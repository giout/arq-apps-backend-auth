import { z } from 'zod';
import { username } from './generics.js';

export const teacherSchema = z.object({
	name: username,
	email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Email must be a string',
		})
		.max(255, 'Email must be at most 255 characters long')
		.email('Invalid email')
		.min(5, 'Email must be at least 5 characters long'),
	number: z
		.string({
			required_error: 'Number is required',
			invalid_type_error: 'Number must be a string',
		})
		.max(255, 'Number must be at most 255 characters long')
		.min(5, 'Number must be at least 5 characters long'),
});

export const updateTeacherSchema = teacherSchema.partial();
