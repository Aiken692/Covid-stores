const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const expressSession = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();
const mongoose  = require('mongoose');
// Callign the signup model.
const User = require('./models/Signup');
// calling the registration model.
const Register = require('./models/Registration');
require('./models/Customer');

// declaring Routes in the server
const homeRoutes = require('./routes/homeRoute');
const signupRoutes = require('./routes/signupRoutes');
const signinRoutes = require('./routes/signinRoutes')
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');
const AddpdtRoutes = require('./routes/AddpdtRoute');


//Creates an express server.
const app = express();

//Data base 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

});
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open')
    })
    .on('error', (err) => {
        console.log(`connection errr: ${err.message}`);
    });


//configurations.
//Setting the engine view which contains the pug file.
app.set('view engine', 'pug')
app.set('views', './views')




// Insta......
app.use(express.static('public'));
app.use("Addpdt/img",express.static('public'));
app.use(express.static('uploads'));
// body-parser middleware.
app.use(bodyParser.urlencoded({extended: true}));


// Express Session Configs
app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Passport configs for the User.
passport.use('user-local',User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Passport configs for the Register.
passport.use(Register.createStrategy());
passport.serializeUser(Register.serializeUser());
passport.deserializeUser(Register.deserializeUser());

// Global varriable for logging in user.
app.get('*',  (req, res, next) => {
    res.locals.user = req.user || null;
    next();
})



// Instations for routes.
app.use('/', homeRoutes);
app.use('/signup', signupRoutes);
app.use('/signin', signinRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/Addpdt', AddpdtRoutes);







//an end point that doesnt exist.
app.get('*', (req, res) => {
    res.send('error');
})


//server Side.
//Listening for requests: the server.
app.listen(5000, () =>{
    console.log('listening on 5000')
})