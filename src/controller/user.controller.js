const { UserService } = require('../service/user.service');

class UserController{
    constructor(){
        this.userService = new UserService();
    }

    getAllUsers = (req, res) =>{
        const users=this.userService.getAllUsers();
        res.status(200).json(users);
    }

    getUserById = (req, res) =>{
        const user = this.userService.getUserById(req.params.id);
        if (user) res.status(200).json(user);
        else res.status(404).send({message:"User not found"}); 
    }

    createUser = (req,res) =>{
        const newUser = this.userService.createUser(req.body);
        res.status(201).json({
            message: "User added successfully",
            user: newUser
        })
    }

    updateUser = (req, res) =>{
        const user = this.userService.updateUser(req.params.id, req.body);
        if (!user){
            res.status(404).json({
                message:"User not found"
            })
        }
        else{
            res.status(200).json({
                message:"Updated",
                user:this.updateUser
            }); 
        }      
    }

    deleteUser = (req, res) =>{
        const user = this.userService.deleteUser(req.params.id);
        if (!user){
            res.status(404).json({
                message: "User not found"
            })
        }else{
            res.status(200).json({
                message: "User deleted successfully"
            })
        }
    }
}

module.exports = { UserController };
