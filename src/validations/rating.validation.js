import { z } from 'zod';

export const ratingSchema = z.object({
	value: z
		.number({
			required_error: 'Rating is required',
			invalid_type_error: 'Rating must be a number',
		})
		.int()
		.min(1)
		.max(5),
	teacher: z.string({
		required_error: 'Teacher is required',
		invalid_type_error: 'Teacher must be a string',
	}),
	subject: z.string({
		required_error: 'Subject is required',
		invalid_type_error: 'Subject must be a string',
	}),
});

export const updateRatingSchema = ratingSchema.partial();
