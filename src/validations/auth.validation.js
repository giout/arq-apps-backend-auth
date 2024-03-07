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
