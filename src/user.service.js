const userService = require('../database/index');

class UserService{
    getAllUsers = ()=>{
        const mockUser = userService.loadUsers();
        return mockUser;
    }

    getUserById = (id)=>{
        const mockUser = userService.loadUsers();
        return mockUser.find((user)=>user.id=== parseInt(id));
    }

    createUser = (userName) =>{
        const mockUser = userService.loadUsers();
        const { name } = userName;
        const user = {
            id: mockUser.length + 1,
            name: name
        };
        mockUser.push(user);
        userService.saveUsers(mockUser);
        return user;
    }

    updateUser = (id, userName)=>{
        const mockUser = userService.loadUsers();
        const userId = mockUser.findIndex((user)=>user.id === parseInt(id));
        if (userId === -1) return null;
        else{
            mockUser[userId].name =  userName || mockUser[userId].name;
            userService.saveUsers(mockUser);
            return mockUser[userId];
        }
    }

    deleteUser = (id) =>{
        const mockUser = userService.loadUsers();
        const  userId = mockUser.findIndex((u) => u.id === parseInt(id));
        if (userId === -1) return false;
        else{
            mockUser.splice(userId,1);
            userService.saveUsers(mockUser);
            return true;
        } 
    } 
}

module.exports = { UserService };
