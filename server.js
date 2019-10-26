const express = require('express');
const app =express();
const cors = require('cors');
const passport = require("passport");
const bodyParser = require('body-parser');

var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));


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


app.get('/api/auth/docusign',
  passport.authenticate('docusign'));
  

app.get('/api/auth/docusign/callback',
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.query)
    res.redirect('http://localhost:3000/login?code=' + req.query.code);
  });


  // using port deployed to Heroku || use local port 5000
const port = process.env.PORT || 5000;

// listen to port when server is running
app.listen(port, () => console.log(`Server running on port ${port}`));