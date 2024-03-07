import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.model.js';

const jwtOptions = {
	secretOrKey: process.env.JWT_SECRET || 'HeavenOrHell',
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
	try {
		const user = await User.findById(payload.id);
		if (!user) {
			return done(null, false);
		}
		done(null, user);
	} catch (error) {
		done(error, false);
	}
};

const jwtStrategy = new Strategy(jwtOptions, jwtVerify);

export default jwtStrategy;
