 const proffys = [
     {name: "José Alexandre", 
     avatar: "https://avatars2.githubusercontent.com/u/59508016?s=460&u=6f23767441985ce8b6a7d57d508540deedc2ca51&v=4", 
     whatsapp: "5551995036852", 
     bio: "Hello, I´m Alexandre. I´m that kind of restless person always satisfied but never resigned. So chose technology. So I love technology!", 
     subject: "Matemática", 
     cost: "20", 
     weekday: [0], 
     time_from: [720], 
     time_to: [1120]
    },
    {name: "José Alexandre", 
     avatar: "https://avatars2.githubusercontent.com/u/59508016?s=460&u=6f23767441985ce8b6a7d57d508540deedc2ca51&v=4", 
     whatsapp: "5551995036852", 
     bio: "Hello, I´m Alexandre. I´m that kind of restless person always satisfied but never resigned. So chose technology. So I love technology!", 
     subject: "Matemática", 
     cost: "20", 
     weekday: [0], 
     time_from: [720], 
     time_to: [1120]
    }
 ]
 
 const express = require('express')
 const server = express()
 server.use(express.static('public'))
.get("/", (require, response) =>{
    return response.sendFile(__dirname + "/views/index.html")
})
.get("/study", (require, response) =>{
    return response.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (require, response) =>{
    return response.sendFile(__dirname + "/views/give-classes.html")
})
.listen(5500)