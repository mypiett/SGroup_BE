import { getDB } from "../config/db.config"
import { ObjectId } from 'mongodb';

class UserModel{
    async getAllUsers(){
        const users = await getDB().collection('users').find().toArray();
        return users;
    }

    async getUserById(userId){
        const user= await getDB().collection('users').findOne({_id: new ObjectId(userId)});
        return user;
    }

    async createUser(name,email,password){
        try{
            const user= await getDB().collection('users').insertOne({name,email,password});
            return this.getUserById(user.insertedId);
            // return user;
        }catch(err){
            throw err;
        }
    }

    async updateUser(userName,userEmail,userPassword,userId){
        const user = await getDB().collection('users').updateOne(
            {_id: new ObjectId(userId)},
            { $set: { name: userName, email: userEmail, password: userPassword } }
        );
        return this.getUserById(userId); 
    }

    async deleteUser(userId){
        const result = await getDB().collection('users').deleteOne(
            {_id: new ObjectId(userId)}
        );
        if (result.deletedCount === 0) {
            return false;
        }
        return true;
    }
}

export default new UserModel();