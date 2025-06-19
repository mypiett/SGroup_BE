import jwt from "jsonwebtoken";
import "dotenv/config";

class UserProvider {
    async encodeToken(user) {
        const token = jwt.sign({ 
            id: user._id.toString(),
            email: user.email,      
            role: user.role  
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
            algorithm: "HS256",
        });
        return token;
    }

    async decodeToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}
export default new UserProvider();