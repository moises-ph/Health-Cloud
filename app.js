// Require the modules

const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const {db} = require('./database/database');

// Import the routes

const loginRouter = require('./routers/Login');
const registerRouter = require('./routers/Register');

// Start the app

const app = express();
const port = 3000 || process.env.PORT;

// Middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

// Vistas

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);


// Route of Index

app.get('/', (req, res)=>{
    res.render('home');
});

// Set up Routes

app.use('/login', loginRouter);
app.use('/register', registerRouter);


// Start the server
app.listen(port, ()=>{
    db.getConnection((err, connection)=>{
        if (err) throw err;
        console.log(`Connected to the database`);
    })
    console.log(`Server running on port ${port}`);
})
