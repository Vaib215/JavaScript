const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 3000;

// Use CORS and allow all origins
app.use(cors());
// Use JSON
app.use(express.json());

// Use Notes Routes
const notesRoute = require('./Notes.Route');
app.use('/', notesRoute);

const connect = async () => {
    await mongoose.connect("mongodb+srv://vaibhav:korakagaz@kora-kagaz-db.bvosf54.mongodb.net/?retryWrites=true&w=majority").then(() => {
        console.log("MongoDB connected");
    }).catch((error) => {
        throw error;
    })
};

app.listen({host: '0.0.0.0',port}, () => {
    connect()
    console.log(`Server running at http://localhost:${port}`);
});
