 //core module
const path = require('path') 

//3rd party module
const express = require("express");
const bodyParser = require("body-parser");

//local module
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(express.static(path.join(__dirname,'public')))  

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next) => {  //since we are not specifying path it will take '/' by default
    // res.status(404).send('<h1>Page Not Found!!</h1>')
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'))
})

app.listen(3000); //this function internally does the job of creating server and listening it. See docs to get more idea from express github
