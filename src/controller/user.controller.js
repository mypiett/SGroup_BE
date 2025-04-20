import UserService from '../service/user.service';

class UserController{
    async getAllUsers(req, res,next){
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json({
                success: true,
                data: users

            })
        }catch(err){
            next(err);
        }
    }

    async getUserById(req,res,next){
        try{
            const userId = req.params.id;
            const user= await UserService.getUserById(userId);
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                })
            } else {
                res.status(200).json({
                    success: true,
                    data: user
                })
            }
        }
        catch (err){
            next(err);
        }
    }

    async createUser(req,res,next){
        try{
            const { name, email, password } = req.body;
            const userId = await UserService.createUser(name,email,password);
            res.status(200).json({
                success: true,
                data: userId
            })
        } catch (err){
            next(err);
        }
    }

    async updateUser(req,res,next){
        try{
            const { name, email, password} = req.body;
            const userId = req.params.id;
            const userUpdate = await UserService.updateUser( name, email, password,userId);
            if (!userUpdate) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                })
            } else {
                res.status(200).json({
                    success: true,
                    data: userUpdate
                })
            }
        } catch (err){
            next(err);
        }
    }

    async deleteUser(req,res,next){
        try{
            const userId = req.params.id;
            const allUsers = await UserService.getAllUsers();
            const userDeleted = await UserService.deleteUser(userId);
            if (userDeleted == false) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Deleted successfully'
                    // data: allUsers
                })
            }
        }catch (err){
            next(err);
        }
    }
}
export default new UserController();
