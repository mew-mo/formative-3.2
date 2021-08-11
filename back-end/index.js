
const express = require('express'); //includes express
const app = express(); //calls the express method
const bodyParser = require('body-parser');
const mongoose = require('mongoose');  //mongoooose for connecting and talking to mongodb
const cors = require('cors'); //for the cross origin restriction policy -- cross origin resource sharing
const bcrypt = require('bcryptjs'); //for encryption and decryption of data
const config = require('./config.json'); //config that contains the user, password and cluster name

const port = 3000;

app.use(bodyParser.json()); //calling body parser method
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors()); // calling cors

mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.${config.MONGO_CLUSTER_NAME}.mongodb.net/School?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('DB is connected'))
.catch(err=> {
  console.log(`DBConnectionError: ${err.message}`);
});

// listening to viewport
app.listen(port, () => console.log(`Fullstack app is listening on port ${port}`));
