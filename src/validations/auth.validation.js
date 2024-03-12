import { z } from 'zod';
import { username, password, role, university } from './generics.js';

export const registerSchema = z.object({
	username,
	password,
	role,
	university,
});

export const loginSchema = z.object({
	username,
	password,
});

export const verifySchema = z.object({
    token: z
    .string(
        {
            required_error: 'Token is required',
			invalid_type_error: 'Token must be a string',
        }
    )
})
