const express=require("express")

const app =express()

app.get('/', (require,response)=> {
    response.send("Olá Mundo")
})

app.listen(3000,()=> {
    console.log("servidor Rodando Na porta 3000")
})