import { getDB } from "../config/db.config.js"
import { ObjectId } from "mongodb";

const getUserByEmail = async (email) => {
    return await getDB().collection("users").findOne({ email });
};

const createUser = async (userData) => {
    return await getDB().collection("users").insertOne(userData);
};

const getUserByEmailAndPassword = async (email, password) => {
    return await getDB().collection("users").findOne({ email, password });
};

const getUserById = async(id) => {
    return await getDB().collection("users").findOne(
        { _id: new ObjectId(id) },
        { projection: { password: 0 } } 
    );
}

const getAllUsers = async() => {
    return await getDB().collection("users").find().toArray();
}

const updateUser = async(id, data) => {
    return await getDB().collection("users").updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );
}

const deleteUser = async(id) => {
    return await getDB().collection("users").deleteOne({ _id: new ObjectId(id) });
}


const setResetPasswordToken = async(email, resetPasswordToken, resetPasswordExpiration) =>{
    try{
        const result = await getDB().collection("users").updateOne(
            {email},
            {$set:{
                resetPasswordToken,
                resetPasswordExpiration
            }}
        );
        return result.matchedCount > 0;
    }catch (error){
        throw error;
    }
};

const checkResetPasswordToken = async (email, resetPasswordToken) => {
    try{
        const result = await getDB().collection("users").findOne({
            email,
            resetPasswordToken,
            resetPasswordExpiration: {$gt : new Date()}
        });
        return result;
    }catch (error){
        throw error;
    }
};

const resetPassword = async(newPassword, email) =>{
    try{
        const result = await getDB().collection("users").updateOne(
            {email},
            {$set:{
                    password: newPassword,
                    resetPasswordToken: null,
                    resetPasswordExpiration: null,
                    lastResetPasswordDate: new Date()
                }
            }
        );
        return result.matchedCount > 0;
    }catch (error){
        throw error;
    }
};

export default {
    getAllUsers,
    updateUser,
    deleteUser,
    getUserByEmail,
    createUser,
    getUserByEmailAndPassword,
    getUserById,
    setResetPasswordToken,
    checkResetPasswordToken,
    resetPassword
};