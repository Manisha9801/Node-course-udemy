const http = require('http')

const express = require('express')

const app = express()

app.use('/add-product',(req,res,next) => {
    console.log('In msg middleware')
    res.send('<h1>In Add-Product Page</h1>')
})
app.use('/',(req,res,next) => {
    console.log('In the middleware which always runs')
    res.send('<h1>This always runs!</h1>')
})

app.listen(3000)  //this function internally does the job of creating server and listening it. See docs to get more idea from express github