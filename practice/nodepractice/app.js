var express = require('express')
var app = express()
const fs = require('fs');
var router = express.Router()


// predicate the router with a check and bail out when needed
app.get("/f", [
    function (req, res, next) {
      fs.writeFile("/inaccessible-path", "data", next);
    },
    function (req, res) {
      res.send("OK");
    }
  ]);
 

app.get("/", function (req, res) {
    throw new Error("BROKEN"); // Express will catch this on its own.
  });

// use the router and 401 anything falling through
app.use('/admin', router, function (req, res) {
  res.sendStatus(401)
})
app.listen(3000)
/* var app = express()
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router) */

/* var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000) */

/* const express = require("express");
const app = express();
const port = 7777;
// const emptyArray = [];
const routeware = require('./appMiddleware');

  app.use('/appMiddleware', routeware);
  
  app.listen(port, () => {
    console.log(`you r at ${port}`);
  }); */
 /*  app.get('/example/c',(req,res)=>{
    
    res.json({ user: 'tobi' });
  
  }) */
/* app.get('/', (req,res)=>{
    res.send('Hello world!')
})
app.post('/sendHello',(req,res)=>{
    emptyArray.push('post hello');
    res.send(emptyArray);
})
app.put('/edit',(req,res)=>{
    emptyArray[0]="put";
    res.send(emptyArray);
})
app.delete('/delete',(req,res)=>{
    emptyArray.pop();
    console.log(`empty array ${emptyArray}`);
    res.send(`empty array ${emptyArray}`);
}) */


