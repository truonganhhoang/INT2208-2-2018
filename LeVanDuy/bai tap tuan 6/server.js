// server.js

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

const leassonRouter = require('./modules/api/lesson/router')
const fileController = require('./utils/fileController')
const lessonController = require('./modules/api/lesson/controller')
const cardController = require('./modules/api/cardlesson/controller')

var configDB = require('./config/database.js');

mongoose.connect(configDB.url, (err) => {
    if (err) console.log(err)
    console.log("Database connect success")

    lessonController.getAll().then(docs => {
        if (docs.length == 0) {
            console.log("created")
            let data = [...fileController.readFile('./dataLesson.json')]
            data.forEach((element) => {
                let d = {title: element.title, id: element.id, imagePath: element.imgPath}
                lessonController.createLesson(d).then(data => {
                    console.log(data.id)
                }).catch(err => {
                    console.log(err)
                })
            })
        }
    }).catch(err => {
        console.log(err)
    })

    cardController.getAll().then(docs => {
        if(docs.length == 0) {
            console.log("created")
            let data = [...fileController.readFile('./database.json')]
            data.forEach((element) => {
                let idlesson = element.idlesson
                element.lessonContent.forEach((element) => {
                    let newCard = {title : element.title, idLesson: idlesson, imagePath: element.imgPath}
                    cardController.createCard(newCard).then(data => {
                        console.log(data._id)
                    }).catch(err => {
                        console.log(err)
                    }) 
                })
            })
        }
    })
});

require('./config/passport')(passport); 


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', 
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 


require('./app/routes.js')(app, passport); 

app.listen(port, (err) => {
    if (err) console.log(err)
    console.log('Sever starting at port: ' + port);
});

