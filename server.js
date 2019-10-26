const express = require('express');
const app =express();

const bodyParser = require('body-parser');
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