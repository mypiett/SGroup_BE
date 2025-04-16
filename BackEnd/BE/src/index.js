import express from 'express';
import routes from './routes'; 
import path from 'path';
import templateEngineConfig from './config/templateEngine.config';
import errorHandler from './middleware/errorHandler.middleware';
import 'dotenv/config';
import {connectDB} from './config/db.config';

const startApp = () =>{
    // app.use(express.urlencoded);
    const app = express();
    app.use(express.json());
    const port = 3000;
    templateEngineConfig(app);
    app.use(express.static(path.join(__dirname,'public')));
    app.use(routes); 
    app.use(errorHandler);
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}


(async () =>{
    try{
        await connectDB();
        console.log('Connected to MongoDB');
        startApp();
    } catch(err){
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
})();
