const express = require('express')
const app = express()

let port = process.env.PORT || 69420


//idk what this does but it makes it so you can see the page?
app.get('/mainpage', (req, res) => {
    res.sendFile(path.join(__dirname + '../HTML_Files/mainpage.html'));
    res.status(200)
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '../HTML_Files/mainpage.html'));
    res.status(200)
})

app.get('/developers', (req, res) => {
    res.sendFile(path.join(__dirname + '../HTML_Files/mainpage.html'));
    res.status(200)
})

app.get('/library', (req, res) => {
    res.sendFile(path.join(__dirname + '../HTML_Files/mainpage.html'));
    res.status(200)
})

app.get('/signUpPage', (req, res) => {
    res.sendFile(path.join(__dirname + '../HTML_Files/mainpage.html'));
    res.status(200)
})

app.listen(port, function() {
    console.log('listening to port %d',port)
})