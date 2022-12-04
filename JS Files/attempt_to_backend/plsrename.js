const express = require('express')
const path = require('path')


mongoose.connect('mongodb://127.0.0.1/test', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
  console.log("we are connected now!")
})
//login schema
const loginSchema = new mongoose.Schema({
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
})
//mainpage GET
app.get('/mainpage.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','mainpage.html'));
    res.status(200)
})
//mainpage styling
app.get('/maincss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'styles.css'));
})

//about page GET
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','about.html'));
    res.status(200)
})
//about page CSS
app.get('/aboutcss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'styles.css'));
})

//developers page GET
app.get('/developers.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','developers.html'));
    res.status(200)
})
//developers page CSS
app.get('/developercss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'styles.css'));
})

//Library GET
app.get('/library.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','library.html'));
    res.status(200)
})
//Library CSS
app.get('/librarycss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'library.css'));
})

//SignUpPage GET
app.get('/signUpPage.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..', '..','HTML Files','signUpPage.html'));
    res.status(200)
})
//signuppage CSS
app.get('/signupcss', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..','csS Files', 'signUpPage.css'));
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
})

app.listen(port, function() {
    console.log('listening to port %d',port)
})