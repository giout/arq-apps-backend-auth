import { Router } from 'express';
import authRoutes from './auth.route.js';

const router = Router();
const defaultRoutes = [
	{
		path: '/',
		route: authRoutes,
	},
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

export default router;
