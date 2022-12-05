const express = require('express')
const path = require('path')

const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://TestUser:test@kosstudio.s0dh2.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
  console.log("we are connected now!")
})
//login schema
const loginSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String
  })

const loginThing = mongoose.model('loginStuff', loginSchema)


const app = express()

let port = process.env.PORT || 8080

//get images

app.use(express.static(path.join(__dirname,'..', '..')))

//idk what this does but it makes it so you can see the page?
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','mainpage.html'));
    res.status(200)
    console.log(200)
})
//mainpage GET
app.get('/mainpage.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','mainpage.html'));
    res.status(200)
    console.log(200 + " to main page")
})
//mainpage styling
app.get('/maincss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'styles.css'));
})

//about page GET
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','about.html'));
    res.status(200)
    console.log(200 + " to about page")
})
//about page CSS
app.get('/aboutcss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'styles.css'));
})

//developers page GET
app.get('/developers.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','developers.html'));
    res.status(200)
    console.log(200 + " developers")
})
//developers page CSS
app.get('/developercss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'styles.css'));
})

//Library GET
app.get('/library.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','library.html'));
    res.status(200)
    console.log(200 + " to library page")
})
//Library CSS
app.get('/librarycss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'library.css'));
})

//SignUpPage GET
app.get('/signUpPage.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','signUpPage.html'));
    res.status(200)
    console.log(200 + " to sign up page")
})
//signuppage CSS
app.get('/signupcss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'signUpPage.css'));
})

app.post("/signUpPage.html",(req,res)=>{
    var myData=new loginThing({email: "qwer@qwerqwer",
        username: "qwerqwerqwer",
        password: "qwerqwerqwer"});
    myData.save().then(()=>{
        res.status(200).sendFile(path.join(__dirname,'..', '..','HTML Files','mainpage.html'));
        console.log(200 + " to main page")
    })
})

//navbar css
app.get('/navbarcss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'navbar.css'));
})

//if the page was not found
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 Page Not Found')
    console.log(404 + " Page not Found")
})

app.listen(port, function() {
    console.log('listening to port %d',port)
})