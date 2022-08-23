// Require the modules

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { mongoose } = require('./database/database');
require('dotenv').config();

// Import the routes

const loginRouter = require('./routers/Login');
const registerRouter = require('./routers/Register');
const DashboardRouter = require('./routers/Dashboard');
const LogoutRouter = require('./routers/Logout');

// import jwt validator
const verifyToken = require('./routers/validate-token');

// Start the app

const app = express();
const port = process.env.PORT;

// Middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up Routes

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/dashboard', verifyToken ,DashboardRouter);
app.use('/logout', verifyToken, LogoutRouter)


// Start the server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
