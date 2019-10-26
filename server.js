const express = require('express');
const app =express();
const bodyParser = require('body-parser');
// FIREBASE DB SETUP
//
var admin = require('firebase-admin');
var cred = require('./cal-hacks-zombies-firebase-adminsdk-xgecl-7b8fabe166.json');

admin.initializeApp({
  credential: admin.credential.cert(cred),
  databaseURL: "https://cal-hacks-zombies.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

// FIREBASE DB
// adding data to the DB under users table
// 
var usersRef = ref.child("users");
usersRef.set({
  tester123: {
    full_name: "zombies 123",
    email:'zombies.123@sjsu.edu'
  },
  tester456: {
    full_name: "zombies 456",
    email:'zombies.456@gmail.edu'
  }
});

// Body parser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());


  ///////////GET REQUEST
app.get('/api/',(req,res)=>{
    res.send("Hello World");
})
 
  // using port deployed to Heroku || use local port 5000
const port = process.env.PORT || 5000;

// listen to port when server is running
app.listen(port, () => console.log(`Server running on port ${port}`));