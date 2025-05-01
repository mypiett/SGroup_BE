import express from 'express';
import routes from './routes/index.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import templateEngineConfig from './config/templateEngine.config.js';
import errorHandler from './middleware/errorHandler.middleware.js';
import 'dotenv/config';
import { connectDB } from './config/db.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const startApp = () => {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));


    templateEngineConfig(app, __dirname);

    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', routes);
    app.use(errorHandler);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};

(async () => {
    try {
        await connectDB();
        console.log('Connected to MongoDB');
        startApp();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
})();
