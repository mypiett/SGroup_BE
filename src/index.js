
const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();  
const port = 3000;

app.use(express.json());

const usersFilePath = path.join(__dirname, 'user.json');  

function loadUsers() {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);  
    } catch (err) {
        console.error('Error reading file:', err);
        return []; 
    }
}

function saveUsers(users) {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2)); 
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

let mockUser = loadUsers();

app.get('/users',(req,res) =>{
    res.json(mockUser);
})

app.get('/users/:id',(req,res)=>{
    const user = mockUser.find((u)=>u.id===Number(req.params.id))
    if (user) res.send(user);
    else res.status(404).send({message:"User not found"});    
})

app.post('/users',(req,res)=>{
    const { name } = req.body;
    const user = {
        id: mockUser.length + 1,
        name: name
    };
    mockUser.push(user);
    saveUsers(mockUser);
    res.status(201).json({
        message: "User added successfully",
        user: user,
        all: mockUser

    })
})

app.put('/users/:id',(req,res)=>{
    const userId = mockUser.findIndex((u)=>u.id === Number(req.params.id));
    if (userId === -1){
        res.status(404).json({
            message:"User not found"
        })
    }
    else{
        mockUser[userId].name = req.body.name || mockUser[userId].name;
        saveUsers(mockUser);
        res.status(200).json({
            message:"Updated",
            user: mockUser[userId],
            all:mockUser
        }); 
    }   
})

app.delete('/users/:id',(req,res)=>{
    const  userId = mockUser.findIndex((u) => u.id === Number(req.params.id));
    if (userId === -1){
        res.status(404).json({
            message: "User not found"
        })
    }else{
        mockUser.splice(userId,1);
        saveUsers(mockUser);
        res.status(200).json({
            message: "User deleted successfully",
            all: mockUser
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
