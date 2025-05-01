import bcrypt from "bcryptjs";

class HashProvider {
    async generateHash(password) {
        const salt = await bcrypt.genSalt(10); 
        return await bcrypt.hash(password, salt);
    }

    async compareHash(plainpassword, hashedPassword) {
        // console.log("mat khau nguoi dung:", plainpassword);
        // console.log("mat khau trong DB:", hashedPassword);
        const Check= await bcrypt.compare(plainpassword, hashedPassword);
        return Check;
    }
}

export default new HashProvider(); 
