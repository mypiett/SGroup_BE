import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import routes from './routes/index.js';
import templateEngineConfig from './config/templateEngine.config.js';
import errorHandler from './middleware/errorHandler.middleware.js';
import { connectDB } from './config/db.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const startApp = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  templateEngineConfig(app, __dirname);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', routes);
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

(async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');
    await startApp();
  } catch (err) {
    console.error('Failed to connect MongoDB:', err.message);
    process.exit(1);
  }
})();

