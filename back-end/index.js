const express = require('express')
const mongoose = require('mongoose')

const app = express()
const router = require('./route/route')
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:4200',
}))

app.use(express.json())
app.use(router)

const path = require('path')
app.use(express.static(path.join(__dirname,"uploads")));

mongoose.connect('mongodb://localhost:27017/Angular-CRUD', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

app.listen(3000, () => {
    console.log(`Server is running`);
});


