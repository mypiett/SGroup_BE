import bcrypt from "bcryptjs";

class HashProvider {
    async generateHash(password) {
        const salt = await bcrypt.genSalt(10); 
        return await bcrypt.hash(password, salt);
    }

    async compareHash(plainpassword, hashedPassword) {
        const Check= await bcrypt.compare(plainpassword, hashedPassword);
        return Check;
    }
}

export default new HashProvider(); 
