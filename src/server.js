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
 const subject = [
     
 ]
 function pageLanding(require, response){
     return response.render("index.html")
 }
 function pageStudy(require, response){
     const filters = require.query
    return response.render("study.html", {proffys, filters})
}
function pageGiveClasses(require, response){
    return response.render("give-classes.html")
}

 const express = require('express')
 const server = express()

 const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noChache: true,

})

 server.use(express.static('public'))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)