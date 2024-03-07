import 'dotenv/config.js';
import { createServer } from 'http';
import app from './app.js';
import mongoose from 'mongoose';
const port = process.env.PORT || 4000;

const httpsServer = createServer(app);

const connection = async () => {
	try {
		console.log('Connecting to MongoDB...');
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

connection().then(() => {
	httpsServer.listen(port, () => {
		console.log(`Server running on http://localhost:${port}`);
	});
});
