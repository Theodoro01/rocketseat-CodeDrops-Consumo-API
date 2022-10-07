const express = require('express')
const cors = require('cors')
const axios = require('axios')


const app = express()
app.use(cors())

app.get('/', async (req, res) => {
    try{ 
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)

        return res.status(200).json(data)
    } catch(error) {
        console.log(error)
    }    
})


app.listen('4567', () => {
    console.log(`Servidor rodando na porta https://localhost:4567`)
})