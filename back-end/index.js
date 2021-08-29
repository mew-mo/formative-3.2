
const express = require('express'); //includes express
const app = express(); //calls the express method
const bodyParser = require('body-parser');
const mongoose = require('mongoose');  //mongoooose for connecting and talking to mongodb
const cors = require('cors'); //for the cross origin restriction policy -- cross origin resource sharing
const bcrypt = require('bcryptjs'); //for encryption and decryption of data
const config = require('./config.json'); //config that contains the user, password and cluster name

const Item = require('./models/portfolio.js');
const User = require('./models/users.js');

const port = 3000;

app.use(bodyParser.json()); //calling body parser method
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors()); // calling cors

mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.${config.MONGO_CLUSTER_NAME}.mongodb.net/portfolio?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('DB is connected'))
.catch(err=> {
  console.log(`DBConnectionError: ${err.message}`);
});

// PORTFOLIO CRUD operations ------------------------
// By Mo

// POST method (C - Create)
app.post('/addItem', (req,res)=>{
  const dbPortItem = new Item({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    author: req.body.author,
    url: req.body.url
  });
  // saves this to the database and notifies the users if it has saved
  dbPortItem.save().then(result=> {
    res.send(result);
  }).catch(err=> res.send(err));
  // sends result to mongodb and shows up in the database
})
// app.post ends

// GET method (R - Read)
// to retrieve ALL objects or documents from the database
app.get('/allItems', (req, res) => {
  Item.find()
    .then(result => {res.send(result);})
})

// PATCH method (U - Update)
app.patch('/updateItem/:id', (req, res) => {
  const idParam = req.params.id;
  // comes from the user when they request
  Item.findById(idParam,(err, product) => {
    if (Item['user_id'] == req.body.userId) {
      const updatedItem = {
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        author: req.body.author,
        url: req.body.url
      }
      Item.updateOne({_id: idParam}, updatedItem)
        .then(result => {res.send(result)})
        .catch(err => res.send(err))
    } else {
      res.send('Error: Portfolio item not found');
    }
  })
})
//patch ends

// DELETE method (D - Delete)
// delete a product from database
app.delete('/deleteItem/:id', (req, res) => {
  const idParam = req.params.id;
  Item.findOne({_id: idParam}, (err, item) => {
    if (item) {
      Item.deleteOne({_id: idParam}, err => {
        res.send('deleted')
      });
    } else {
      res.send('Error: item not found');
    }
  })
  .catch(err => res.send(err));
});
//delete ends

// USER CRUD operations ------------------------
// by Rane

// POST - Method C (Create)
app.post('/registerUser', (req,res) => {
  // finds one user
  User.findOne({username:req.body.username}, (err,userResult) => {
    if (userResult){
      res.send('Error: Username is already taken. Please try another name');
    } else {
      const hash = bcrypt.hashSync(req.body.password); //Password Encryption
      const user = new User({
        _id: new mongoose.Types.ObjectId,
        username: req.body.username,
        email: req.body.email,
        password: hash
      });
      user.save()
      .then(result => {
        res.send(result)
      })
      .catch(err => res.send(err));
    }
  })
});

// GET - Method R (Read)
app.get('/allUsers', (req,res) => {
  User.find()
  .then(result => {
    res.send(result);
  })
});

// PATCH - Method U (Update)
// Will be called when sessionStorage credentials are the same as user storage
app.patch('/updateUser/:id', (req, res) => {
  const idParam = req.params.id;
  User.findById(idParam, (err, user) => {
    if (User['user_id'] == req.body.userId) {
      const hash = bcrypt.hashSync(req.body.password);

      const updateUser = {
        username: req.body.username,
        email: req.body.email,
        password: hash
      }
      User.updateOne({_id: idParam}, updateUser)
      .then(result => {res.send(result)})
      .catch(err => res.send(err))
    } else {
      res.send('Error: User not found')
    }
  })
})

// DELETE - Method D (Delete)
app.delete('/deleteUser/:id', (req, res) => {
  const idParam = req.params.id;
  User.findOne({_id: idParam}, (err, user) => {
    if (User['user_id'] == req.body.userId) {
      User.deleteOne({_id: idParam}, err => {
        res.send ('deleted')
      })
    } else {
      res.send('Error: Incorrect User')
    }
  })
  .catch(err => res.send(err));
})

// POST - Method C (Create)
app.post('/loginUser', (req,res) => {
  User.findOne({username:req.body.username}, (err,userResult) =>{
    if (userResult){
      // .compareSync - if password matches
      if (bcrypt.compareSync(req.body.password, userResult.password)) {
        res.send(userResult)
      } else {
        res.send('Error: Not authorized')
      }
    } else {
      res.send('Error: User not found. Please register')
    }
  })
})

// here u go friend :D
// thanks friend :)



// listening to viewport
app.listen(port, () => console.log(`Portfolio app is listening on port ${port}`));
