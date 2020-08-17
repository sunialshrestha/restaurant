const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require ('path')
const config = require('config')

const app = express();

// Bodyparser Middleware
app.use(express.json());

//DB config
//const db = require('./config/keys').mongoURI;
const db = config.get('mongoURI');

//connect to Mongo
mongoose.connect(db, {
        useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected..'))
    .catch(err=> console.log(err.response));

// Use Routes
app.use('/api/items', require('./routes/api/items')) // go to routes/api/items
app.use('/api/itemCategory', require('./routes/api/itemCategory')) // go to routes/api/items
app.use('/api/users', require('./routes/api/users')) // go to routes/api/items
app.use('/api/auth', require('./routes/api/auth')) // go to routes/api/items

//server static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server started on port ${port}`))
