import express from 'express'
const app = express();  
const port = 3000;
// let user;
app.use(express.json());



// app.post('/users',
//     (req,res,next)=>{
//         const user= req.body;
//         user.name = 'thanhtuyen'
//         return next()
//     },
//     (req,res,next)=>{
//         res.send(req.body)
//     }
// )

// app.post('/users',
//     abc,
//     (req,res,next)=>{
//         try{
//             const a=5;
//             const b=5;
//             res.json(a/b)
//         }
//     }
// )
app.use('/',(err,req,res,next)=>{
    console.log('Middleware2');
    console.log('error',err)
    res.status(500).send('Something broke!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


// // import express from 'express' // ko có babel thì dùng cái ni,
// const express = require('express') //=> khi mà dùng babel thì mở cái ni
// const app = express();  //tạo đối tượng app đại diện cho express
// const port = 3000 // định nghĩa cổng

// // const mockUser = [ 
// //     { id: 1, name: 'John Doe' },
// //     { id: 2, name: 'Jane Doe' },
// //     { id: 3, name: 'Jim Doe' }
// // ];

// app.get('/hello', (req, res) => { // định nghĩa 1 Route, '' ko có gì => mặc định là '/', có chữ mà ko có dấu '/' => cũng ko chạy được 
//     // console.log(req.query.c);
//     console.log('oke')
//     res.status(201).send("hek")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// chạy bằng cách node index.js
// gọi trên brower => localhost:3000/ hoặc là 192.168.1.6:3000/, cách gọi IP máy mình => terminal -> ipconfig -> IPv4 Address


// import express from 'express'