import UserProvider from '../providers/user.provider.js';

class VerifyMiddleware{
    async verifyToken(req, res, next){
        try{
            const header = req.headers.authorization;
            if(!header){
                throw new Error('Not login yet');
            }
            const token = header.split(' ')[1];
            const data = await UserProvider.decodeToken(token)
            req.user = {
                id: data.id,
                username: data.username,    
                role: data.role              
            };

            next();
        }catch(err){
            next(err);
        }
    }
    checkAdmin(req, res, next) {
        const user = req.user;
        if (user.role != "admin") {
            return res.status(403).json({ success: false, message: "Forbidden" });
        }
        next();
    }
    checkUser(req, res, next) {
        if (!req.user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        next();
    }

};
export default new VerifyMiddleware();