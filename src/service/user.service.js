import userModel from "../model/user.model.js";
import UserProvider from "../providers/user.provider.js";
import emailProvider from "../providers/email.provider.js";
import hashProvider from "../providers/hash.provider.js";
import bcrypt from "bcryptjs";

class UserService {
    async register(name, email, password,role) {
        try {
            const isExisted = await userModel.getUserByEmail(email);
            if (isExisted) {
                throw new Error("Email already exists");
            }
            const user = await userModel.createUser({
                name,
                email,
                password,
                role: role || "user" 
            });

            return user.insertedId;
        } catch (err) {
            throw err;
        }
    }

    async login(email, password) {
        try {
            const user = await userModel.getUserByEmail(email);
            if (!user) {
                throw new Error("Email not exists");
            }
            const Check = await hashProvider.compareHash(password,user.password);
            if (!Check){
                throw new Error("Wrong password");
            }
            const token = await UserProvider.encodeToken(user);
            return token;
        } catch (err) {
            throw err;
        }
    }

    async getMe(id) {
        try {
            const user = await userModel.getUserById(id);
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
            const user = userModel.getUserByEmail(email);

            if (!user){
                throw new Error('Email not found');
            }

            const resetPasswordToken = await bcrypt.genSalt(10);
            const resetPasswordExpiration = new Date(Date.now() + 10*60*1000);
            const result = await userModel.setResetPasswordToken(email, resetPasswordToken, resetPasswordExpiration);

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
            const user = await userModel.checkResetPasswordToken(email, resetPasswordToken);
            if (!user){
                throw new Error('Invalid token or token has expired');
            }

            const password = await hashProvider.generateHash(newPassword);
            const updateStatus = await userModel.resetPassword(password, email);

            if (!updateStatus){
                throw new Error('Reset password fail');
            }
            return true;
        }catch (error){
            throw error;
        }
    }
    async getAllUsers() {
        try {
            const users = await userModel.getAllUsers();
            return users;
        } catch (err) {
            throw err;
        }
    }

    async getUserById(id) {
        try {
            const user = await userModel.getUserById(id);
            if (!user) throw new Error("User not found");
            return user;
        } catch (err) {
            throw err;
        }
    }

    async updateUser(id, data) {
        try {
            const updated = await userModel.updateUser(id, data);
            return updated;
        } catch (err) {
            throw err;
        }
    }

    async deleteUser(id) {
        try {
            const deleted = await userModel.deleteUser(id);
            return deleted;
        } catch (err) {
            throw err;
        }
    }

}

export default new UserService();