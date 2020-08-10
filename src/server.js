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
 const subjects = [
     "Artes",
     "Biologia",
     "Ciências",
     "Eduacação Física",
     "Geografia",
     "História",
     "Matemárica",
     "Português",
     "Química",
 ]
 const weekdays = [
     "Segunda-Feira",
     "Terça-Feira",
     "Quarta-Feira",
     "Quinta-Feira",
     "Sexta-Feira",
     "Sábado",
     "Domingo",
 ]

 function getSubject(){
     const arrayPosition = +subjectNumber - 1
     return subjects[arrayPosition]
 }
 function pageLanding(require, response){
     return response.render("index.html")
 }
 function pageStudy(require, response){
    const filters = require.query
    return response.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(require, response){
    const data = require.query
    const isNotEmpty = Object.keys(data).length != 0

    if (isNotEmpty){
        data.subject = getSubject(dataSubject)
        proffys.push(data)

        return response.redirect('/study')
    }
    return response.render("give-classes.html", {subjects, weekdays})
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