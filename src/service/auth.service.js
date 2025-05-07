import authModel from "../model/auth.model.js";
import AuthProvider from "../providers/auth.provider.js";
import emailProvider from "../providers/email.provider.js";
import hashProvider from "../providers/hash.provider.js";
import bcrypt from "bcryptjs";

class AuthService {
    async register(name, email, password) {
        try {
            const isExisted = await authModel.getUserByEmail(email);
            if (isExisted) {
                throw new Error("Email already exists");
            }
            const user = await authModel.createUser({ name, email, password });
            return user.insertedId;
        } catch (err) {
            throw err;
        }
    }

    async login(email, password) {
        try {
            const user = await authModel.getUserByEmail(email);
            if (!user) {
                throw new Error("Email not exists");
            }
            const Check = await hashProvider.compareHash(password,user.password);
            if (!Check){
                throw new Error("Wrong password");
            }
            const token = await AuthProvider.encodeToken(user);
            return token;
        } catch (err) {
            throw err;
        }
    }

    async getMe(id) {
        try {
            const user = await authModel.getUserById(id);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (err) {
            throw err;
        }
    }
    
    async forgotPassword(email){
        try {
            const user = authModel.getUserByEmail(email);

            if (!user){
                throw new Error('Email not found');
            }

            const resetPasswordToken = await bcrypt.genSalt(10);
            const resetPasswordExpiration = new Date(Date.now() + 10*60*1000);
            const result = await authModel.setResetPasswordToken(email, resetPasswordToken, resetPasswordExpiration);

            if (!result){
                throw new Error('Can not reset password');
            }

            emailProvider.sendEmail({
                emailFrom: process.env.SMTP_USER,
                emailTo: email,
                emailSubject: 'Reset password',
                emailText:
                    'Here is your reset password token: ' + resetPasswordToken
            });
            return true;
        }catch (error){
            throw error;
        }
    }

    async resetPassword(email, resetPasswordToken, newPassword){
        try{
            const user = await authModel.checkResetPasswordToken(email, resetPasswordToken);
            if (!user){
                throw new Error('Invalid token or token has expired');
            }

            const password = await hashProvider.generateHash(newPassword);
            const updateStatus = await authModel.resetPassword(password, email);

            if (!updateStatus){
                throw new Error('Reset password fail');
            }
            return true;
        }catch (error){
            throw error;
        }
    }
}

export default new AuthService();