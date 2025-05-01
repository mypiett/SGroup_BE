import AuthService from "../service/auth.service.js"
import HashProvider from '../providers/hash.provider.js'

class AuthController {
    async register(req, res, next) {
        try {
            const { name, email, password } = req.body;
            const hashedpassword = await HashProvider.generateHash(password);
            const authId = await AuthService.register(name, email, hashedpassword);
            res.status(200).json({
                success: true,
                message: "Success",
                data: authId,
            });
        } catch (err) {
            next(err);
        }
    }
    async login(req, res,next){
        try{
            const {email, password} = req.body;
            
            const token = await AuthService.login(email, password);
            res.status(201).json({
                success: true,
                token: token,
                message: "Login successfully"
            })
        }catch(err){
            next(err);
        }
    }
    async getMe(req, res, next){
        try{
            const userId = req.user;
            const user = await AuthService.getMe(userId);
            res.status(200).json({
                success: true,
                data: user
            })
        }catch(err){
            next(err);
        }
    }
    
}

export default new AuthController();