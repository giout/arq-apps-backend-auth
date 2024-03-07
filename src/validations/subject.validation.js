import { z } from 'zod';

export const subjectSchema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be a string',
		})
		.max(100, 'Name must be at most 100 characters long')
		.min(2, 'Name must be at least 2 characters long'),
	term: z
		.number({
			required_error: 'Term is required',
			invalid_type_error: 'Term must be a number',
		})
		.int()
		.gt(0, 'Term must be greater than 0')
		.lte(12, 'Term must be less than or equal to 12'),
	teachers: z
		.array(
			z.string({
				required_error: 'Teacher is required',
				invalid_type_error: 'Teacher must be a string',
			})
		)
		.min(1, 'At least one teacher is required')
		.optional(),
});

export const updateSubjectSchema = subjectSchema.partial();
