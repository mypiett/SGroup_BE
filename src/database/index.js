const fs = require('fs');
const path = require('path');

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

module.exports = { loadUsers, saveUsers }; 
