import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/index.js';
import morgan from 'morgan';
import passport from 'passport';
import jwtStrategy from './config/passport.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.use(passport.initialize());
passport.use(jwtStrategy);
app.use('/', routes);
app.use(errorHandler);

export default app;
