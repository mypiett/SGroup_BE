import authModel from "../model/auth.model.js";
import AuthProvider from "../providers/auth.provider.js";
import hashProvider from "../providers/hash.provider.js";

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
    
}

export default new AuthService();