import path from 'path';

const templateEngineConfig = (app) =>{
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname,'../views')); // đường dẫn tuyệt đối

    // app.set('views', './views'); // đường dẫn tương đối
}

export default templateEngineConfig;