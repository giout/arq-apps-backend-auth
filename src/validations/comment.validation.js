import { z } from 'zod';

export const commentSchema = z.object({
	content: z
		.string({
			required_error: 'Content is required',
			invalid_type_error: 'Content must be a string',
		})
		.max(2000, 'Content must be at most 2000 characters long')
		.min(1, 'Content must be at least 1 characters long'),
	post: z
		.string({
			required_error: 'Post ID is required',
			invalid_type_error: 'Post ID must be a string',
		})
		.optional(),
});

export const updateCommentSchema = commentSchema.partial();
