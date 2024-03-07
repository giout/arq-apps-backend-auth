import { z } from 'zod';

export const postSchema = z.object({
	title: z
		.string({
			required_error: 'Title is required',
			invalid_type_error: 'Title must be a string',
		})
		.max(100, 'Title must be at most 100 characters long')
		.min(1, 'Title must be at least 1 characters long'),
	description: z
		.string({
			required_error: 'Description is required',
			invalid_type_error: 'Description must be a string',
		})
		.max(2000, 'Description must be at most 2000 characters long')
		.min(1, 'Description must be at least 1 characters long'),
	subject: z
		.string({
			required_error: 'Subject ID is required',
			invalid_type_error: 'Subject ID must be a string',
		})
		.optional(),
});

export const updatePostSchema = postSchema.partial();
