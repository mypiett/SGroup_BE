import { getDB } from "../config/db.config"

class UserService{
    async getAllUsers(){
        try {
            const users = await getDB().collection('users').find().toArray();
            return users;
        }catch(err){
            throw err;
        }
    }

    async getUserById(userId){
        try {
            const user= await getDB().collection('users').findOne({_id: Number(userId)});
            return user;
        }catch(err){
            throw err;
        }
    }

    async createUser(name){
        try{
            const user= await getDB().collection('users').insertOne({
                name,
                _id: await getDB().collection('users').countDocuments() +1
            });
            return this.getUserById(user.insertedId);
            // return user;
        }catch(err){
            throw err;
        }
    }

    async updateUser(userName,userId){
        try{
            const user = await getDB().collection('users').updateOne(
                {_id: Number(userId)},
                {$set: {name: userName}}
            );
            return this.getUserById(userId);
        }catch(err){
            throw err;
        }
    }

    async deleteUser(userId){
        try{
            const result = await getDB().collection('users').deleteOne(
                {_id: Number(userId)}
            );
            if (result.deletedCount === 0) {
                return false;
            }
            return true;
        } catch (err){
            throw err;
        }
    }
}

export default new UserService();