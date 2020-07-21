const express = require('express');
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/homeRoute');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');
const agentsRoutes = require('./routes/agentsRoutes');

//Creates an express server.
const app = express();

// Insta......
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', homeRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/agent', agentsRoutes);


//configurations.
app.set('view engine', 'pug')
app.set('views', './views')

// app.get('/agent', (req, res) => {
//     res.render('agentlist')
// })



//an end point that doesnt exist.
app.get('*', (req, res) => {
    res.send('error');
})





//server Side.
//Listening for requests: the server.
app.listen(5000, () =>{
    console.log('listening on 5000')
})