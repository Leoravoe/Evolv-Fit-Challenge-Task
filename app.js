// import
const express = require('express');
const cors = require('cors');

// require for db connection
require('./DB/dbConn')

// creating app instance
const app = express();

// middleware

// express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// middleware for cors handling
app.use(cors());

// port config
const PORT = process.env.PORT || 8000;

// connecting server with the port
console.log("Starting backend express server");
// listening to port for running backend server
app.listen(PORT, ()=> { console.log(`Server started at port ${PORT}`)});


// routes

// home route
app.get('/', (req, res)=> {
    res.send("Hi, I am Evolv Fit are you up for some fun!!");
});

app.use('/api',require('./Routes/Trainer/trainerRoutes'))
app.use('/api',require('./Routes/User/userRoutes'))