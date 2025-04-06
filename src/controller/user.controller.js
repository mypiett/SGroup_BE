const express = require('express');
const userService = require('../service/user.service');
const router = express.Router(); 

let mockUser = userService.loadUsers();

router.get('/',(req,res) =>{
    res.json(mockUser);
})

router.get('/:id',(req,res)=>{
    const user = mockUser.find((u)=>u.id===Number(req.params.id))
    if (user) res.send(user);
    else res.status(404).send({message:"User not found"});    
})

router.post('/',(req,res)=>{
    const { name } = req.body;
    const user = {
        id: mockUser.length + 1,
        name: name
    };
    mockUser.push(user);
    userService.saveUsers(mockUser);
    res.status(201).json({
        message: "User added successfully",
        user: user,
        all: mockUser

    })
})

router.put('/:id',(req,res)=>{
    const userId = mockUser.findIndex((u)=>u.id === Number(req.params.id));
    if (userId === -1){
        res.status(404).json({
            message:"User not found"
        })
    }
    else{
        mockUser[userId].name = req.body.name || mockUser[userId].name;
        userService.saveUsers(mockUser);
        res.status(200).json({
            message:"Updated",
            user: mockUser[userId],
            all:mockUser
        }); 
    }   
})

router.delete('/:id',(req,res)=>{
    const  userId = mockUser.findIndex((u) => u.id === Number(req.params.id));
    if (userId === -1){
        res.status(404).json({
            message: "User not found"
        })
    }else{
        mockUser.splice(userId,1);
        userService.saveUsers(mockUser);
        res.status(200).json({
            message: "User deleted successfully",
            all: mockUser
        })
    }
})

module.exports = router;