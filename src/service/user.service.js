import UserModel from "../model/user.model";

class UserService{
    async getAllUsers(){
        try {
            const users = await UserModel.getAllUsers();
            return users;
        }catch(err){
            throw err;
        }
    }

    async getUserById(userId){
        try {
            const user= await UserModel.getUserById(userId);
            return user;
        }catch(err){
            throw err;
        }
    }

    async createUser(name,email,password){
        try{
            const user= await UserModel.createUser(name,email,password);
            return user;
        }catch(err){
            throw err;
        }
    }

    async updateUser(userName,userEmail,userPassword,userId){
        try{
            const user = await UserModel.updateUser(userName,userEmail,userPassword,userId);
            return user;
        }catch(err){
            throw err;
        }
    }

    async deleteUser(userId){
        try{
            return await UserModel.deleteUser(userId);
        } catch (err){
            throw err;
        }
    }
}

export default new UserService();
