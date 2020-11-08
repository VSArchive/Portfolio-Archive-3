const express = require('express')
const favicon = require('express-favicon')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use(favicon(__dirname + '/public/img/profile-no-bg.png'))

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/github', (req, res) => {
    res.redirect('https://github.com/vineelsai26')
})

app.get('/playstore', (req, res) => {
    res.redirect('https://play.google.com/store/apps/dev?id=7899749311611474057')
})

app.post('/mail', (req,res) => {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject

    const mailOptions = {
        from: email,
        to: 'vineelsai26@gmail.com',
        subject: 'From Website Contact Form By : ' + name,
        text: subject + '\n\n\n' + email
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent');
        }
        res.sendFile(__dirname + '/mail.html')
    })
})

app.listen(5000)