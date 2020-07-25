const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const homeRoutes = require('./routes/homeRoute');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');
const AddpdtRoutes = require('./routes/AddpdtRoute');
const mongoose  = require('mongoose');
require('./models/Registration');

//Creates an express server.
const app = express();

//Data base 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open')
    })
    .on('error', (err) => {
        console.log(`connection errr: ${err.message}`);
    });


// Insta......
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', homeRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
// app.use('/agent', agentsRoutes);
app.use('/Addpdt', AddpdtRoutes);

//configurations.
//Setting the engine view which contains the pug file.
app.set('view engine', 'pug')
app.set('views', './views')

















//an end point that doesnt exist.
app.get('*', (req, res) => {
    res.send('error');
})


//server Side.
//Listening for requests: the server.
app.listen(5000, () =>{
    console.log('listening on 5000')
})