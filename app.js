const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/user');

// Settings
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api', userRoute);

// Routes
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API');
});

// Conection to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Conectado con MongoDB Atlas"))
.catch((error)=>console.log(error));

// Server
app.listen(port, ()=>{
    console.log('Server listening on port ', port);
})