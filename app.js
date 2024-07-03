require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require('path');
const cors = require('cors');


const app=express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/auth', authRoutes);

app.use(cors());
const PORT= process.env.PORT || 5000;

//connect mongoose
mongoose.connect(process.env.MONGO_URI)

// mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// app.listen=(PORT, ()=> {
//     console.log(`SERVER IS LISTENING ON ${PORT}...`);
// })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});