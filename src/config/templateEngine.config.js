import path from 'path';

const templateEngineConfig = (app, rootDir) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(rootDir, 'views')); 
};

export default templateEngineConfig;
