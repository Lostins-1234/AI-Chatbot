// server.js
const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config({path:'./config.env'});

const chatbotRoutes = require('./routes/chatbotRoutes'); // Importing the router

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGODB_URL =  "mongodb+srv://sagar:sagarsingh1234@cluster0.qa1hu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGODB_URL);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/', chatbotRoutes); // Include the router

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})