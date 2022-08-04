// Require the modules

const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const { mongoose } = require('./database/database');

// Import the routes

const loginRouter = require('./routers/Login');
const registerRouter = require('./routers/Register');
const DashboardRouter = require('./routers/Dashboard');
const LogoutRouter = require('./routers/Logout');

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
app.use('/dashboard', DashboardRouter);
app.use('/logout', LogoutRouter)


// Start the server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
