const express=require("express")
const exphbs =("require-handlebars")



const app =express()

app.engine('handlebars',exphbs.engine)
app.set('view engine','handlebars')

app.get('/', (require,response)=> {
    response.send("Olá Mundo")
})

app.listen(3000,()=> {
    console.log("servidor Rodando Na porta 3000")
})