import UserService from "../service/user.service.js"
import HashProvider from '../providers/hash.provider.js'
import userService from "../service/user.service.js";

class UserController {
    async register(req, res, next) {
        try {
            const { name, email, password, role } = req.body;
            const hashedpassword = await HashProvider.generateHash(password);
            const userId = await UserService.register(name, email, hashedpassword, role);
            res.status(200).json({
                success: true,
                message: "Register successfully",
                data: userId,
            });
        } catch (err) {
            next(err);
        }
    }

    async login(req, res,next){
        try{
            const {email, password} = req.body;
            
            const token = await UserService.login(email, password);
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
            const user = await UserService.getMe(userId);
            res.status(200).json({
                success: true,
                data: user
            })
        }catch(err){
            next(err);
        }
    }

    async forgotPassword(req,res,next){
        try{
            const {email} = req.body;

            const check = await userService.forgotPassword(email);

            if (check){
                return res.status(200).json({
                    success: true,
                    message: 'Reset password email sent successfully'
                });
            }
        } catch (error){
            next(error);
        }
    }

    async resetPassword(req, res, next){
        try{
            const {email, resetPasswordToken, newPassword} = req.body;
            const check = await userService.resetPassword(email, resetPasswordToken, newPassword);
            
            if (check) {
                return res.status(200).json({
                    success:true,
                    message: 'Reset password successfully'
                });
            }
        }catch (error){
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
    

    async getAllUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json({ success: true, data: users });
        } catch (err) {
            next(err);
        }
    }

    async getUserById(req, res, next) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json({ success: true, data: user });
        } catch (err) {
            next(err);
        }
    }

    async updateUser(req, res, next) {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body);
            res.status(200).json({ success: true, data: updatedUser });
        } catch (err) {
            next(err);
        }
    }

    async deleteUser(req, res, next) {
        try {
            await UserService.deleteUser(req.params.id);
            res.status(200).json({ success: true, message: "User deleted" });
        } catch (err) {
            next(err);
        }
    }

    async updateMyProfile(req, res, next) {
        try {
            const userId = req.user;
            const updated = await UserService.updateUser(userId, req.body);
            res.status(200).json({ success: true, data: updated });
        } catch (err) {
            next(err);
        }
    }

}

export default new UserController();