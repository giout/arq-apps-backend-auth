import { z } from 'zod';

export const universitySchema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be a string',
		})
		.min(1, 'Name must be at least 1 character long')
		.max(255, 'Name must be at most 255 characters long'),

	locale: z
		.string({
			required_error: 'Locale is required',
			invalid_type_error: 'Locale must be a string',
		})
		.min(1, 'Locale must be at least 1 character long')
		.max(2, 'Locale must be at most 2 characters long'),
});

export const updateUniversitySchema = universitySchema.partial();
