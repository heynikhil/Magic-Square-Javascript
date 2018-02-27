const express = require('express')
const app = express()
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(3000, () => console.log('Server Started'));